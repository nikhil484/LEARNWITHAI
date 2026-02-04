import express from 'express';
import { body } from 'express-validator';
//This line imports body, a validation middleware used to validate and sanitize request body data in Express.
import {
    register,
    login,
    getProfile,
    updateProfile,
    changePassword
} from '../controllers/authController.js';
import protect from '../middleware/auth.js';

const router=express.Router()

const registerValidation=[
    body('username')
    .trim()
    .isLength({min:3})
    .withMessage('Username must be of atlesat 3 characters '),

    body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

    body('password')
    .isLength({min:6})
    .withMessage('Password must be of atleast 6 characters')

]

const loginValidation=[
    body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

    body('password')
    .notEmpty()
    .withMessage('Password is required')
    
]

//public routes 

router.post('/register',registerValidation,register)
router.post('/login',loginValidation, login)

//protected routes
router.get('/profile',protect,getProfile)
router.put('/profile',protect,updateProfile)
router.post('/change-password',protect,changePassword)

export default router;