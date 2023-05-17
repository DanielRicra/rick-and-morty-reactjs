import { useParams } from "react-router-dom";
import './Detail.css';
import useCharacter from "../../hooks/useCharacter";

const CharacterDetail = () => {
  const { id } = useParams();
  const { character, error, loading } = useCharacter(id);

  return (
    <div className="character-detail container">
      {loading ? (
        <p className="character-detail__loading">Loading...</p>
      ) : (
        <>
          <div className="character-detail__info">
            <h1>{character.name}</h1>
            <div className='card__character-status'>
              <span className={` ${character.status === 'Alive' ? 'green' : 'red'}`}></span>
              <p>{character.status} - {character.species}</p>
            </div>

            <div>
              <span>Gender:</span>
              <p>{character.gender}</p>
            </div>

            <div>
              <span>Origin:</span>
              <p>{character.origin?.name}</p>
            </div>

            <div>
              <span>First seen in:</span>
              <p>{character.episode?.at(0)}</p>
            </div>
            
            <div>
              <span>Last seen in:</span>
              <p>{character.episode?.at(-1)}</p>
            </div>
          </div>
          <img src={character.image} alt={character.name} />
        </>
      )}
      {error && !loading && (
        <p className="character-detail__error">{error.message}</p>
      )}
    </div>
  )
}

export default CharacterDetail;