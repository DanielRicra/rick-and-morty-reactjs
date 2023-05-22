import { fetchCharacterById } from '../service/characterService.js';
import { validateCharacterId } from '../utils/validations.js';
import { HTTP_STATUS } from '../utils/constants.js';

const getCharacterByID = async (req, res) => {
   const { characterId } = req.params;

   try {
      validateCharacterId(characterId);

      const data = await fetchCharacterById(characterId);

      if (data.error) {
         res.status(HTTP_STATUS.NOT_FOUND).json({ error: data.error });
         return;
      }
      
      const character = {
         id: data.id,
         name: data.name,
         status: data.status,
         species: data.species,
         gender: data.gender,
         type: data.type,
         image: data.image,
         origin: data.origin.name,
         location: data.location.name,
         episode: data.episode,
      };

      res.status(HTTP_STATUS.OK).json(character);
   } catch (error) {
      console.error('Error in getCharacterByID: ', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: error.message });
   }
};

export { getCharacterByID };