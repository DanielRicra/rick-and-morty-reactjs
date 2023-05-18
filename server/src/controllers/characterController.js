
const getCharacterByID = async (res, characterId) => {
   if (isNaN(characterId)) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify({ message: 'Invalid character id' }));
   }

   try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
      if (!response.ok) {
        return res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify({ message: 'Character not found' }));
      }

      const data = await response.json();
      const character = {
         id: data.id,
         name: data.name,
         status: data.status,
         species: data.species,
         gender: data.gender,
         type: data.type,
         image: data.image,
         origin: data.origin.name,
         location: data.location.name,
         episode: data.episode
      }

      res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(character));
   }
   catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' }).end(JSON.stringify({ message: error.message }));
   }
}

export default getCharacterByID;