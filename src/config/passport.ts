import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as LocalStrategy} from 'passport-local';
import ParentModel from '../models/Parents';
import { config } from './index';
import bcrypt from 'bcrypt';

passport.use(new GoogleStrategy({
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.redirectUri
}, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails?.[0].value;
    if (!email) return done(new Error('No email found'));

    const user = {
        name: profile.displayName,
        email,
        authProvider: 'google'
    };

    return done(null, user);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID!,
    clientSecret: process.env.FACEBOOK_APP_SECRET!,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name']
}, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails?.[0].value;
    if (!email) return done(new Error('No email found'));

    const user = {
        name: `${profile.name?.givenName} ${profile.name?.familyName}`,
        email,
        authProvider: 'facebook'
    };

    return done(null, user);
}));

// Register the parent as normal
passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password', 
    passReqToCallback: true,
}, async (req, email, password, done) => {
    const existingUser = await ParentModel.findOne({ email });

    if(existingUser) return done(null, false, {message: 'Email already registered'});
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { 
        name: req.body.name,
        email: email,
        password: hashedPassword,
        authProvider: 'local'
    }

    return done(null, user);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user: any, done) => done(null, user));

export default passport;