import { NavLink } from 'react-router-dom';

import './NavBar.css';
import SearchBar from '../searchbar/SearchBar';
import { logo, sunIcon, moonIcon } from '../../assets';

const NavBar = ({ theme, changeTheme, onSearch, searchQuery, setSearchQuery }) => {
  const searchBarProps = {onSearch, searchQuery, setSearchQuery}

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='Rick-And-Morty-Logo' />
      </div>

      <ul className='navbar__links'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>about</NavLink>
        </li>
      </ul>

      <SearchBar {...searchBarProps} />

      <div className='navbar__theme-switch' onClick={changeTheme}>
        <p>Theme</p>
        <img src={theme === 'dark' ? sunIcon : moonIcon} alt={`${theme === 'dark' ? 'dark' : 'light'}-icon`} />
      </div>
    </nav>
  )
}

export default NavBar;