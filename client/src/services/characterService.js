const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacterById = async (characterId) => {
   try {
      const response = await fetch(`${BASE_URL}/${characterId}`);

      if (!response.ok) {
         throw new Error('Failed to fetch characters');
      }

      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error('Something went wrong');
   }
};