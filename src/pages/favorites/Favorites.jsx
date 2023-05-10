import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import { removeFromFavorites } from '../../redux/actions';
import Card from "../../components/cards/Card";
import './Favorites.css';

const Favorites = ({ access, setCharacters }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  
  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  const handleRemoveCard = (id) => {
    dispatch(removeFromFavorites(id));
    setCharacters((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className='favorites container'>
      {myFavorites?.map((character) => (
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