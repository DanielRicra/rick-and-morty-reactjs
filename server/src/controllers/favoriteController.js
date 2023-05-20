import { HTTP_STATUS } from '../utils/constants.js';

const myFavoriteCharacters = [];

export const getAllFavorites = (req, res) => {
   res.status(HTTP_STATUS.OK).json(myFavoriteCharacters);
}

export const saveFavorite = (req, res) => {
   const { id, name, status, species, gender, image, origin } = req.body;

   if (!id || !name || !status || !species || !gender || !image || !origin) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
         message: 'Please fill all fields',
      });
      return;
   }

   myFavoriteCharacters.push({
      id,
      name,
      status,
      species,
      gender,
      image,
      origin,
   });

   res.status(HTTP_STATUS.CREATED).json({
      message: 'Character saved successfully',
   });
};

export const deleteFavoriteByID = (req, res) => {
   const { characterID } = req.params;

   const favoriteIndex = myFavoriteCharacters.findIndex(
      (favCharacter) => favCharacter.id === characterID
   );

   if (favoriteIndex === -1) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
         message: 'Character not found in favorites',
      });
      return;
   }

   myFavoriteCharacters.splice(favoriteIndex, 1);

   res.status(HTTP_STATUS.OK).json({
      message: 'Character deleted successfully',
   });
};
