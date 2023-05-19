

export const fetchCharacterById = async (characterId) => {
   try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
      const data = await response.json();
      return data;
   } catch (error) {
      console.error('Error in fetchCharacterById: ', error);
      throw new Error(error.message);
   }
}
