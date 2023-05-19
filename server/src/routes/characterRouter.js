import { Router } from 'express';
import { getCharacterByID } from '../controllers/characterController.js';

const characterRouter = Router();

characterRouter.get('/:characterId', getCharacterByID);

export default characterRouter;
