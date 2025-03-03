
import express from 'express'
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

// API endpoints
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp); //userAuth is middleware
authRouter.post('/verify-account', userAuth, verifyEmail); //userAuth is middleware
authRouter.get('/is-auth', userAuth, isAuthenticated); //userAuth is middleware
authRouter.post('/send-reset-otp', sendResetOtp); 
authRouter.post('/reset-password', resetPassword); 

export default authRouter;
 