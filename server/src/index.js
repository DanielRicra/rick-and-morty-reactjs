import http from 'http';
import characters from './utils/data.js';

const PORT = 3001;

const server = http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   const path = req.url;

   if (path.includes('/api/v1/character')) {
      const id = path.split('/').at(-1);
      if (isNaN(id)) {
         return res.end('Invalid ID or the ir no ID');
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(characters.find(c => c.id === +id)));
   }
});

server.listen(PORT, () => {
   console.log(`server is running on port http://localhost:${PORT}`);
})