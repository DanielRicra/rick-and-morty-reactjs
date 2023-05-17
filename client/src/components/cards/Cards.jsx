import Card from './Card';
import './Cards.css';

export default function Cards({ characters, removeCharacter }) {

   return (
      <div className='cards'>
         {characters.length === 0 && (
            <p>There is no character added yet, add new one in the search bar, introducing a ID</p>
         )}
         {characters.map((character) => (
            <Card
               key={character.id}
               character={character}
               removeCard={() => removeCharacter(character.id)}
            />
         ))}
      </div>
   );
}
