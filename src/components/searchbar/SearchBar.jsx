import './SearchBar.css';

export default function SearchBar({ onSearch, setSearchQuery, searchQuery }) {
   const handleChange = (event)=> {
      setSearchQuery(event.target.value);
   }

   return (
      <form className='search-bar' onSubmit={onSearch}>
         <input type='text' onChange={handleChange} value={searchQuery} placeholder='Search' />
         <button onClick={onSearch} type='button'>Add with Id</button>
      </form>
   );
}
