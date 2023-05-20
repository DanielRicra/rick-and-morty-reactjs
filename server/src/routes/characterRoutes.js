import { Router } from 'express';
import { getCharacterByID } from '../controllers/characterController.js';

const characterRoutes = Router();

characterRoutes.get('/:characterId', getCharacterByID);

export default characterRoutes;
