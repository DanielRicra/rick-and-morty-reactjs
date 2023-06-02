import { HTTP_STATUS } from '../utils/constants.js';
import { User, Character, FavoriteCharacter } from '../db.js';

export const getAllFavorites = async (_, res) => {
   const allFavorites = await FavoriteCharacter.findAll();
   res.status(HTTP_STATUS.OK).json(allFavorites);
}

export const getFavoritesByUserID = async (req, res) => {
   const { userId } = req.params;

   const user = await User.findByPk(userId);

   if (!user) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
         error: 'User not found',
      });
      return;
   }

   const favoriteCharacters = await user.getCharacters();

   res.status(HTTP_STATUS.OK).json(favoriteCharacters);
}

export const saveFavorite = async (req, res) => {
   const { userId, characterId } = req.body;

   if (!userId || !characterId) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
         error: 'User and Character Id are required',
      });
      return;
   }

   const user = await User.findByPk(userId);
   const character = await Character.findOne({
      where: {
         apiId: characterId,
      }
   });

   if (!user || !character) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
         error: 'User or Character not found',
      });
      return;
   }

   // Add character to user's favorites
   await user.addCharacter(character);

   res.status(HTTP_STATUS.CREATED).json({
      message: 'Character saved successfully',
   });
};

export const deleteFavoriteByID = async (req, res) => {
   const { characterID, userID } = req.params;

   const user = await User.findByPk(userID);
   const character = await Character.findOne({
      where: {
         apiId: characterID,
      }
   });

   if (!user || !character) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
         error: 'User or Character not found',
      });
      return;
   }

   // Remove character from user's favorites
   const response = await user.removeCharacter(character);
   
   if (!response) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
         error: 'Error deleting character, might not found in user\'s favorites',
      });
      return;
   }

   res.status(HTTP_STATUS.OK).json({
      message: 'Character deleted successfully',
   });
};
