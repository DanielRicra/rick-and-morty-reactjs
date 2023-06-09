import { useDispatch, useSelector } from "react-redux"

import { setFilterByGender, setOrder } from '../../redux/actions';
import Card from "../../components/cards/Card";
import './Favorites.css';

function getFilteredData(characters, filter, order) {
  const sortCb = order === 'asc' ? (a, b) => a.id - b.id : (a, b) => b.id - a.id;
  if (filter === 'all') {
    return characters.sort(sortCb);
  }

  return characters
    .filter((character) => character.gender.toLowerCase() === filter)
    .sort(sortCb);
}

const Favorites = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order);
  const filter = useSelector((state) => state.filter);

  const filtered = useSelector((state) => {
      return getFilteredData(
        state.favorites.myFavorites,
        filter,
        order
      );
    });

  const handleOrder = (e) => {
    dispatch(setOrder(e.target.value));
  }

  const handleFilter = (e) => {
    dispatch(setFilterByGender(e.target.value));
  }

  return (
    <div className='favorites container'>
      <div className='favorites__selects'>
        <select className='favorites__select-order' title='order' name="order" onChange={handleOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <select className='favorites__select-gender' title='gender' name="gender" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className='favorites__cards'>
        {filtered.length === 0 ? 
          <h1>No characters for {filter} filter</h1> 
          : filtered.map((character) => (
          <Card
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;