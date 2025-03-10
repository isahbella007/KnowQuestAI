import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { asyncHandler } from 'src/utils/helpers/asyncHandler';
import authService from './auth.service';
import { ResponseFormatter } from 'src/utils/errors/ResponseFormatter';
import { ErrorBuilder } from 'src/utils/errors/ErrorBuilder';

export const authController = { 
    googleAuth: passport.authenticate('google', { 
        scope: ['profile', 'email']
    }), 

    googleAuthCallback: asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        passport.authenticate('google', (err, user, info) => {
            authService.handleOAuthCallback(res, err, user, info)
        })(req, res, next)
    }), 

    facebookAuth: passport.authenticate('facebook', { 
        scope: ['email']
    }), 

    facebookAuthCallback: asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        passport.authenticate('facebook', (err, user, info) => {
            authService.handleOAuthCallback(res, err, user, info)
        })(req, res, next)
    }), 

    localRegister: asyncHandler(async (req:Request, res:Response, next:NextFunction) => { 
        passport.authenticate('local-register', async (err, user, info) => {
           if(err){ 
              throw ErrorBuilder.internal('Registration failed')
           }

           if(!user){ 
                throw ErrorBuilder.internal(info? info.message : 'Registration Failed')
           }

            //    generate the JWT 
            const token = await authService.generateToken(user)
            // send the user to the dashboard later on 
        })(req, res, next)
    })
}