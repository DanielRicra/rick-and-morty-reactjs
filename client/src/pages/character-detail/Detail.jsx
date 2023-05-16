import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.css';

const CharacterDetail = ({ access }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [characterState, setCharacterState] = useState({
    loading: false,
    error: false,
    character: {}
  });

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();

      if (response.status === 200) {
        setCharacterState({ character: data, loading: false, error: false });
      } else {
        setCharacterState((prev) => ({ ...prev, loading: false, error: true }));
      }
    }

    setCharacterState((prev) => ({ ...prev, loading: true }));
    fetchCharacter();
  }, [id]);

  return (
    <div className="character-detail container">
      {characterState.loading ? (
        <p className="character-detail__loading">Loading...</p>
      ) : (
        <>
          <div className="character-detail__info">
            <h1>{characterState.character.name}</h1>
            <div className='card__character-status'>
              <span className={` ${characterState.character.status === 'Alive' ? 'green' : 'red'}`}></span>
              <p>{characterState.character.status} - {characterState.character.species}</p>
            </div>

            <div>
              <span>Gender:</span>
              <p>{characterState.character.gender}</p>
            </div>

            <div>
              <span>Origin:</span>
              <p>{characterState.character.origin?.name}</p>
            </div>

            <div>
              <span>First seen in:</span>
              <p>{characterState.character.episode?.at(0)}</p>
            </div>
            
            <div>
              <span>Last seen in:</span>
              <p>{characterState.character.episode?.at(-1)}</p>
            </div>
          </div>
          <img src={characterState.character.image} alt={characterState.character.name} />
        </>
      )}
      {characterState.error && !characterState.loading && (
        <p className="character-detail__error">Ups! there was an error, go back to homepage, or try again later</p>
      )}
    </div>
  )
}

export default CharacterDetail;