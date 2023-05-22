const BASE_URL = 'http://localhost:3001/api/v1/favorite';

export const saveToFavorites = async (character) => {
   try {
      const options = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(character),
      };
      const response = await fetch(BASE_URL, options);
      const data = await response.json();

      if (!response.ok) {
         throw new Error(data.error);
      }
      return data;
   } catch (error) {
      throw error;
   }
};

export const removeFavoriteByID = async (characterID) => {
   try {
      const options = {
         method: 'DELETE',
      };

      const response = await fetch(`${BASE_URL}/${characterID}`, options);
      const data = await response.json();

      if (!response.ok) {
         throw new Error(data.error);
      }

      return data;
   } catch (error) {
      throw error;
   }
};
