import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux"
import { useEffect } from "react";

import { removeFromFavorites } from '../../redux/actions';
import Card from "../../components/cards/Card";
import './Favorites.css';

const Favorites = ({ access, setCharacters, myFavorites, removeFromFavorites }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  const handleRemoveCard = (id) => {
    removeFromFavorites(id);
    setCharacters((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className='favorites container'>
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={() => handleRemoveCard(character.id)}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     removeFromFavorites: (characterId) => dispatch(removeFromFavorites(characterId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);