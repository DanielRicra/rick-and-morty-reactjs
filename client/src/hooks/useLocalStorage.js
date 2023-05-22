import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const value = window.localStorage.getItem(key);
         return value ? JSON.parse(value) : initialValue;
      } catch (error) {
         console.log(error);
         return initialValue;
      }
   });

   const setValue = (value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
   };

   return [storedValue, setValue];
};

export default useLocalStorage;
