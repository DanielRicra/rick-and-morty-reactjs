import { useState, useEffect } from 'react';
import { fetchCharacterById } from '../services/characterService';

const useCharacter = (characterId) => {
   const [character, setCharacter] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchCharacter = async () => {
         setLoading(true);
         setError(null);
         try {
            const data = await fetchCharacterById(characterId);
            setCharacter(data);
         } catch (error) {
            setError(error);
         } finally {
            setLoading(false);
         }
      };

      fetchCharacter();
   }, [characterId]);

   return { character, loading, error };
};

export default useCharacter;
