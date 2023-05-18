const BASE_URL = 'http://localhost:3001/api/v1/character';

export const fetchCharacterById = async (characterId) => {
   try {
      const response = await fetch(`${BASE_URL}/${characterId}`);

      if (!response.ok) {
         throw new Error('Character not found');
      }

      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error(error.message);
   }
};