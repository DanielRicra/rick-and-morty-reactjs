import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Card.css';
import { trashIcon } from '../../assets';
import { sleep } from '../../utils/helpers';
import { toggleFavorite } from '../../redux/actions';

function Card({ character, removeCard }) {
   const cardRef = useRef(null);
   const [imageHovered, setImageHovered] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.favorites.myFavorites);

   const handleRemoveCard = () => {
      const style = cardRef?.current?.style;

      style.transition = 'all 0.3s ease-out';
      style.transform = 'translateX(-110%) scale(0.5)';
      style.opacity = '0';
      style.width = '0';
      style.zIndex = '0';
      sleep(300).then(() => {
         removeCard();
      });

      dispatch(toggleFavorite(character));
   }

   const handleFavorite = () => {
      dispatch(toggleFavorite(character));
   }

   return (
      <div className='card' ref={cardRef}>
         {removeCard ? (
            <button type='button' className='card__close-card-button' onClick={handleRemoveCard}>
               <img src={trashIcon} alt="delete-icon" />
            </button>
         ) : null}

         <div className='card__info'>
            <h3><Link to={`/detail/${character.id}`}>{character.name}</Link></h3>
            <div className='card__character-status'>
               <span className={` ${character.status === 'Alive' ? 'green' : 'red'}`}></span>
               <p>{character.status} - {character.species}</p>
            </div>
            <p><span>Origin: </span>{character.origin}</p>
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
                  {myFavorites.some((favorite) => favorite.id === character.id) ? '♥' : '♡'}
               </button>
            )}
         </div>
      </div>
   );
}

export default Card;
