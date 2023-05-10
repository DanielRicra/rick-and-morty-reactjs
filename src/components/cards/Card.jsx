import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Card.css';
import { trashIcon } from '../../assets';
import { sleep } from '../../utils/helpers';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';

function Card({ character, onClose, addToFavorites, myFavorites, removeFromFavorites }) {
   const cardRef = useRef(null);
   const [isFavorite, setIsFavorite] = useState(false);
   const [imageHovered, setImageHovered] = useState(false);

   const handleClick = () => {
      const style = cardRef?.current?.style;

      style.transition = 'all 0.3s ease-out';
      style.transform = 'translateX(-110%) scale(0.5)';
      style.opacity = '0';
      style.width = '0';
      style.zIndex = '0';
      sleep(300).then(() => {
         onClose();
      });

      removeFromFavorites(character.id);
   }

   const handleFavorite = () => {
      if (isFavorite) {
         removeFromFavorites(character.id);
      } else {
         addToFavorites(character);
      }
      setIsFavorite((prev) => !prev);
   }

   useEffect(() => {
      if (myFavorites.find((fav) => fav.id === character.id)) {
         setIsFavorite(true);
      }
   }, [myFavorites, character]);

   return (
      <div className='card' ref={cardRef}>
         <button type='button' className='card__close-card-button' onClick={handleClick}>
            <img src={trashIcon} alt="delete-icon" />
         </button>

         <div className='card__info'>
            <h3><Link to={`/detail/${character.id}`}>{character.name}</Link></h3>
            <div className='card__character-status'>
               <span className={` ${character.status === 'Alive' ? 'green' : 'red'}`}></span>
               <p>{character.status} - {character.species}</p>
            </div>
            <p><span>Origin: </span>{character.origin?.name}</p>
            <p>{character.gender}</p>
         </div>
         <div
            className='card__image'
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
         >
            <img
               src={character.image}
               alt={character.name}
            />
            {imageHovered && (
               <button type='button' className='card__favorite-button' onClick={handleFavorite}>
                  {isFavorite ? '♥' : '♡'}
               </button>
            )}
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addToFavorites: (character) => dispatch(addToFavorites(character)),
      removeFromFavorites: (characterId) => dispatch(removeFromFavorites(characterId)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
