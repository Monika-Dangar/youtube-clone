import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { encryptPassword, decryptPassword } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.route('/register').post(encryptPassword, register);
router.route('/login').post(decryptPassword, login);

export default router