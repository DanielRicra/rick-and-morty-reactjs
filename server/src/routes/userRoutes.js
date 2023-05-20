import { Router } from 'express';
import { login } from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/login', login);

export default userRoutes;