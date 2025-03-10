import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { IParent } from '@name-not-decided/shared-types';
import ParentModel from 'src/models/Parents';
import { config } from 'src/config';

class AuthService {
    private JWT_SECRET = config.jwt.secret
    private JWT_EXPIRES_IN = config.jwt.expiresIn

    public async handleOAuthCallback(res: Response, err: any, user: IParent | false, info: any) {
        try {
            if (err || !user) {
                return res.redirect('/login?error=auth_failed');
            }

            // Check if user exists
            let parent = await ParentModel.findOne({ email: user.email });

            if (!parent) {
                // Create new parent
                parent = await ParentModel.create({
                    name: user.name,
                    email: user.email,
                    authProvider: user.authProvider,
                    isVerified: true
                });
            }

            // Generate JWT
            const token = this.generateToken(parent);

            // Redirect with token
            // res.redirect(`/?token=${token}`);
            console.log('token after handleOAuthCallback',token)
        } catch (error) {
            res.redirect('/login?error=server_error');
        }
    }

    public generateToken(parent: IParent): string {
        return jwt.sign(
            { id: parent._id, email: parent.email },
            this.JWT_SECRET,
            { expiresIn: this.JWT_EXPIRES_IN }
        );
    }

    
}

const authService = new AuthService();
export default authService