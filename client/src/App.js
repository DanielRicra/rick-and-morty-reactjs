import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { About, Authentication, Detail, Home, NotFound, Favorites } from './pages';
import { fetchCharacterById } from './services/characterService';
import AuthenticationProvider from './context/AuthenticationContext';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
   const [searchQuery, setSearchQuery] = useState('');
   const [characters, setCharacters] = useState([]);

   const onSearch = async (event) => {
      event.preventDefault();

      if (isNaN(searchQuery) || characters.find((c) => c.id === +searchQuery)) {
         return;
      }

      try {
         const data = await fetchCharacterById(searchQuery);
         setCharacters((currentCharacters) => [data, ...currentCharacters]);
      } catch (error) {
         console.error(error);
      }
   }

   const removeCharacter = (id) => {
      setCharacters((prev) => prev.filter((character) => character.id !== id));
   }

   const navbarProps = { onSearch, searchQuery, setSearchQuery }

   return (
      <AuthenticationProvider>
         <Routes>
            <Route path='/' element={<Authentication />} />
            <Route element={<ProtectedRoutes navbarProps={navbarProps} />}>
               <Route path='/home' element={<Home characters={characters} removeCharacter={removeCharacter} />} />
               <Route path='/about' element={<About />} />
               <Route path='/favorites' element={<Favorites />} />
               <Route path='/detail/:id' element={<Detail />} />
            </Route>
            <Route path='*' element={<NotFound />} />
         </Routes>
      </AuthenticationProvider>
   );
}

export default App;
