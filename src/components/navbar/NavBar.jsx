import { Link, NavLink } from 'react-router-dom';

import './NavBar.css';
import SearchBar from '../searchbar/SearchBar';
import { logo, sunIcon, moonIcon } from '../../assets';

const NavBar = ({ theme, changeTheme, onSearch, searchQuery, setSearchQuery, setAccess }) => {
  const searchBarProps = {onSearch, searchQuery, setSearchQuery}

  const handleLogout = () => {
    setAccess(false);
  }

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/home' >
          <img src={logo} alt='Rick-And-Morty-Logo' />
        </Link>
      </div>

      <ul className='navbar__links'>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>about</NavLink>
        </li>
        <li>
          <NavLink to='/favorites'>Favorites</NavLink>
        </li>
      </ul>

      <SearchBar {...searchBarProps} />

      <div className='navbar__theme-switch' onClick={changeTheme}>
        <p>Theme</p>
        <img src={theme === 'dark' ? sunIcon : moonIcon} alt={`${theme === 'dark' ? 'dark' : 'light'}-icon`} />
      </div>

      <div className='navbar-logout'>
        <button type='button' onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default NavBar;