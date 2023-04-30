import './Card.css';

function Card(props) {

   return (
      <div className='card'>
         <button type='button' className='card__close-card-button hidden' onClick={props.onClose}>✖</button>
         <div className='card__info'>
            <h3>{props.name}</h3>
            <p>Status: {props.status}</p>
            <p>Specie: {props.species}</p>
            <p>Origin: {props.origin}</p>
         </div>
         <img src={props.image} alt={props.name} />
      </div>
   );
}

export default Card;
