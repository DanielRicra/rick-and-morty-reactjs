import './SearchBar.css';

export default function SearchBar({ onSearch, searchText, setSearchText }) {

   const handleChange = (event)=> {
      setSearchText(event.target.value);
   }

   return (
      <form className='search-bar' onSubmit={onSearch}>
         <input type='text' onChange={handleChange} value={searchText} placeholder='Search' />
         <button onClick={onSearch} type='button'>Search</button>
      </form>
   );
}
