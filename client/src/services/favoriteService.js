const BASE_URL = 'http://localhost:3001/api/v1/favorite';

export const saveToFavorites = async ({ userId, characterId }) => {
   try {
      const options = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ userId, characterId }),
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

export const removeFavoriteByID = async (userId, characterID) => {
   try {
      const options = {
         method: 'DELETE',
      };

      const response = await fetch(`${BASE_URL}/${userId}/${characterID}`, options);
      const data = await response.json();

      if (!response.ok) {
         throw new Error(data.error);
      }

      return data;
   } catch (error) {
      throw error;
   }
};
