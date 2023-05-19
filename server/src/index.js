import express from 'express';
import characterRouter from './routes/characterRouter.js';

const PORT = 3001;

const app = express();

app.use('/api/v1/character', characterRouter);

app.get('/', (_, res) => {
   res.send('Welcome to the Rick and Morty API!');
});

const server = app.listen(PORT, () => {
   console.log(`server is running on port http://localhost:${PORT}`);
});

export default server;