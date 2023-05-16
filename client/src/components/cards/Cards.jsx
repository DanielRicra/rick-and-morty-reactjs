import Card from './Card';
import './Cards.css';

export default function Cards({ characters, setCharacters }) {
   const handleRemoveCard = (id) => {
      setCharacters((prev) => prev.filter((c) => c.id !== id))
   }

   return (
      <div className='cards'>
         {characters.map((character) => (
            <Card
               key={character.id}
               character={character}
               onClose={() => handleRemoveCard(character.id)}
            />
         ))}
      </div>
   );
}
