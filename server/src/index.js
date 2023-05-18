import http from 'http';
import getCharacterByID from './controllers/characterController.js';

const PORT = 3001;

const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   const path = req.url;

   if (path.includes('/api/v1/character')) {
      const id = path.split('/').at(-1);
      getCharacterByID(res, id);
   }
});

server.listen(PORT, () => {
   console.log(`server is running on port http://localhost:${PORT}`);
});