export const validateCharacterId = (characterId) => {
   if (isNaN(characterId)) {
      throw new Error('Cast to number failed');
   }
};
