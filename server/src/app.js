import express from 'express';
import { characterRoutes, favoriteRoutes, userRoutes } from './routes/index.js';
import morgan from 'morgan';
import 'dotenv/config.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use((_, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
   );
   next();
});

app.use('/api/v1/character', characterRoutes);
app.use('/api/v1/favorite', favoriteRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/', (_, res) => {
   res.send('Welcome to the Rick and Morty API!');
});

export default app;
