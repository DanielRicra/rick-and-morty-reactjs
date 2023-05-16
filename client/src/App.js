import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import { About, Authentication, Detail, Home, NotFound, Favorites } from './pages';

const BASE_URL = 'https://rickandmortyapi.com/api/character';
const EMAIL = 'test@gmail.com';
const PASSWORD = 'some45';

function App() {
   const [characters, setCharacters] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [theme, setTheme] = useState('dark');
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      const fetchCharacters = async () => {
         const random1 = Math.round(Math.random() * 825) + 1;
         const random2 = Math.round(Math.random() * 825) + 1;

         const response = await fetch(`${BASE_URL}/${random1},${random2}`);
         const data = await response.json();

         setCharacters((prev) => [...prev, ...data]);
      }

      fetchCharacters();
   }, []);

   const changeTheme = () => {
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
      setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
   }

   const onSearch = async (event) => {
      event.preventDefault();

      if (isNaN(searchQuery) || characters.find((c) => c.id === +searchQuery)) {
         return;
      }

      const response = await fetch(`${BASE_URL}/${searchQuery}`);
      const data = await response.json();
      if (response.status === 200) {
         setCharacters((previous) => [...previous, data]);
      }
   }

   const navbarProps = { changeTheme, theme, onSearch, searchQuery, setSearchQuery, setAccess }

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home')
      }
   }

   return (
      <>
         {location.pathname !== '/' && <NavBar {...navbarProps} />}
         <Routes>
            <Route path='/' element={<Authentication login={login} />} />
            <Route path='/home' element={<Home characters={characters} access={access} setCharacters={setCharacters} />} />
            <Route path='/about' element={<About access={access} />} />
            <Route path='/favorites' element={<Favorites access={access} setCharacters={setCharacters} />} />
            <Route path='/detail/:id' element={<Detail access={access} />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </>
   );
}

export default App;
