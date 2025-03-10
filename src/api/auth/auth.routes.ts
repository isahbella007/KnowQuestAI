import { Router } from "express"
import { authController } from "./auth.controller"

export default () => { 
    const authRouter = Router()

    authRouter.get('/google', authController.googleAuth)
    authRouter.get('/callback/google', authController.googleAuthCallback)

    authRouter.get('/facebook', authController.facebookAuth)
    authRouter.get('/callback/facebook', authController.facebookAuthCallback)

    authRouter.post('/register', authController.localRegister)
    return authRouter
}