import { Router } from 'express';
import { deleteFavoriteByID, getAllFavorites, saveFavorite } from '../controllers/favoriteController.js';

const favoriteRoutes = Router();

favoriteRoutes.get('/', getAllFavorites);
favoriteRoutes.post('/', saveFavorite);
favoriteRoutes.delete('/:characterID', deleteFavoriteByID);

export default favoriteRoutes;
