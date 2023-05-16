import { useNavigate } from 'react-router-dom';
import Cards from '../../components/cards/Cards'

import './Home.css';
import { useEffect } from 'react';

const Home = ({ characters, setCharacters, access }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);
  

  return (
    <div className='home container'>
      <div className='home__characters'>
        <h2>Characters</h2>
        <Cards characters={characters} setCharacters={setCharacters} />
      </div>
    </div>
  )
}

export default Home