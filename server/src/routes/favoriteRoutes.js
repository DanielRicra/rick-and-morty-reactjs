import { Router } from 'express';
import {
   deleteFavoriteByID,
   getAllFavorites,
   saveFavorite,
   getFavoritesByUserID,
} from '../controllers/favoriteController.js';

const favoriteRoutes = Router();

favoriteRoutes.get('/:userId', getFavoritesByUserID);
favoriteRoutes.get('/', getAllFavorites);
favoriteRoutes.post('/', saveFavorite);
favoriteRoutes.delete('/:userID/:characterID', deleteFavoriteByID);

export default favoriteRoutes;
