
function Card(props) {

   return (
      <div className="card">
         <button className="card__close-card-button" onClick={props.onClose}>✖</button>
         <div>
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.origin}</p>
            <img src={props.image} alt={props.name} />
         </div>
      </div>
   );
}

export default Card;
