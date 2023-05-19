import { fetchCharacterById } from '../service/characterService.js';
import { validateCharacterId } from '../utils/validations.js';

const getCharacterByID = async (req, res) => {
   const { characterId } = req.params;

   try {
      validateCharacterId(characterId);

      const data = await fetchCharacterById(characterId);

      if (data.error) {
         res.status(404).json({ error: data.error });
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

      res.status(200).json(character);
   } catch (error) {
      console.error('Error in getCharacterByID: ', error);
      res.status(500).json({ error: error.message });
   }
};

export { getCharacterByID };