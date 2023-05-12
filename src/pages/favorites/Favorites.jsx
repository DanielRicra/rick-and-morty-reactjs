import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import { removeFromFavorites, setFilterByGender, setOrder } from '../../redux/actions';
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

const Favorites = ({ access, setCharacters }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const filtered = useSelector((state) => {
    return getFilteredData(
        state.favorites.myFavorites,
        state.filterOrder.filter,
        state.filterOrder.order
      )
  });
  
  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  const handleRemoveCard = (id) => {
    dispatch(removeFromFavorites(id));
    setCharacters((prev) => prev.filter((c) => c.id !== id))
  }

  const handleOrder = (e) => {
    dispatch(setOrder(e.target.value));
  }

  const handleFilter = (e) => {
    dispatch(setFilterByGender(e.target.value));
  }

  return (
    <div className='favorites container'>
      <div>
        <select name="order" onChange={handleOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <select name="gender" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {filtered?.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={() => handleRemoveCard(character.id)}
        />
      ))}
    </div>
  )
}

export default Favorites;