import { useState, useEffect } from 'react';
import { fetchCharacterById } from '../services/characterService';

const useCharacter = (characterId) => {
   const [character, setCharacter] = useState({});
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   useEffect(() => {
      const fetchCharacter = async () => {
         setLoading(true);
         setError('');
         try {
            const data = await fetchCharacterById(characterId);
            setCharacter(data);
         } catch (error) {
            setError(error.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCharacter();
   }, [characterId]);

   return { character, loading, error };
};

export default useCharacter;
