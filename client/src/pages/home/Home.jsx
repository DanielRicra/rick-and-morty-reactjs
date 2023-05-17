import './Home.css';
import Cards from '../../components/cards/Cards';

const Home = ({ characters, removeCharacter }) => {

  return (
    <div className='home container'>
      <div className='home__characters'>
        <h2>Characters</h2>
        <Cards characters={characters} removeCharacter={removeCharacter} />
      </div>
    </div>
  )
}

export default Home;