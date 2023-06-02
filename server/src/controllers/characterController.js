import { fetchCharacterById } from '../service/characterService.js';
import { validateCharacterId } from '../utils/validations.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { Character } from '../db.js';

const getCharacterByID = async (req, res) => {
   const { characterId } = req.params;

   try {
      validateCharacterId(characterId);

      const data = await fetchCharacterById(characterId);

      if (data.error) {
         res.status(HTTP_STATUS.NOT_FOUND).json({ error: data.error });
         return;
      }
      
      const characterDTO = {
         apiId: data.id,
         name: data.name,
         status: data.status.toLowerCase(),
         species: data.species,
         gender: data.gender.toLowerCase(),
         type: data.type,
         image: data.image,
         origin: data.origin.name,
         location: data.location.name,
      };
      
      await Character.findOrCreate({
         where: {
            apiId: characterDTO.apiId
         },
         defaults: {
            ...characterDTO
         }
      });

      delete characterDTO.apiId;
      characterDTO.id = data.id;
      res.status(HTTP_STATUS.OK).json(characterDTO);
   } catch (error) {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: error.message });
   }
};

export { getCharacterByID };