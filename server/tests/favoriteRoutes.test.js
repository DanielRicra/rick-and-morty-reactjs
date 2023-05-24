import request from 'supertest';
import app from '../src/app.js';

const api = request(app);

describe('Favorites routes', () => {
   const favoriteCharacter = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      origin: 'Earth',
   };

   describe('GET /api/v1/favorite', () => {
      it('Should retrieve all favorite characters', async () => {
         const response = await api.get('/api/v1/favorite');
         expect(response.status).toBe(200);
         expect(response.body).toHaveLength(0);
      });
   });

   describe('POST /api/v1/favorite', () => {
      it('Should add a character to favorite', async () => {
         const response = await api
            .post('/api/v1/favorite')
            .send(favoriteCharacter);
         expect(response.status).toBe(201);
         expect(response.body).toHaveProperty('message');

         const response2 = await api.get('/api/v1/favorite');
         expect(response2.body).toHaveLength(1);
      });
   });

   describe('DELETE /api/v1/favorite/:id', () => {
      it('Should remove a character from favorite', async () => {
         await api.post('/api/v1/favorite').send(favoriteCharacter);

         const response = await api.delete('/api/v1/favorite/1');
         expect(response.status).toBe(200);
         expect(response.body).toHaveProperty('message');
      });

      it('Should response with a 404 status if character with id is not found in favorite', async () => {
         const response = await api.delete('/api/v1/favorite/4');
         expect(response.status).toBe(404);
         expect(response.body).toHaveProperty('error');
      });
   });
});