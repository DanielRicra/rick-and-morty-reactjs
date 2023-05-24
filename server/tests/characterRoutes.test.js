import request from 'supertest';
import app from '../src/app.js';

const api = request(app);

describe('Character Routes', () => {
   describe('GET /api/v1/character/:id', () => {
      it('Should retrieve a character by id', async () => {
         const response = await api.get('/api/v1/character/1');
         expect(response.body).toHaveProperty('name');
         expect(response.body).toHaveProperty('id');
         expect(response.body).toHaveProperty('status');
         expect(response.body).toHaveProperty('species');
         expect(response.body).toHaveProperty('image');
         expect(response.body).toHaveProperty('origin');
         expect(response.body).toHaveProperty('location');
         expect(response.body).toHaveProperty('episode');
      });

      it('Should not retrieve a character if id is not a number', async () => {
         const response = await api.get('/api/v1/character/a');
         expect(response.body).toHaveProperty('error');
         expect(response.status).toBe(500);
      });

      it('Should response with a 404 status character if character with id is not found', async () => {
         const response = await api.get('/api/v1/character/900');
         expect(response.body).toHaveProperty('error');
         expect(response.status).toBe(404);
      });
   });
});

