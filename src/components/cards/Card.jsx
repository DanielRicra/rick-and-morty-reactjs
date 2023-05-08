import { useRef } from 'react';

import './Card.css';
import { trashIcon } from '../../assets';
import { Link } from 'react-router-dom';

function Card({ character, onClose }) {
   const cardRef = useRef(null);

   async function sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
   }

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
   }

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
         <img src={character.image} alt={character.name} />
      </div>
   );
}

export default Card;
