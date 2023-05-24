import request from 'supertest';
import app from '../src/app.js';
import users from '../src/utils/user.js';

const api = request(app);

describe('User routes', () => {
   const credentials = users[0];

   describe('GET /api/v1/user/', () => {
      it('should return 200 OK', async () => {
         const res = await api.post('/api/v1/user/login').send(credentials);
         expect(res.status).toBe(200);
         expect(res.body).toHaveProperty('result');
         expect(res.body.result).toHaveProperty('email');
         expect(res.body).toHaveProperty('access');
         expect(res.body.access).toBe(true);
         expect(res.body.result.email).toBe(credentials.email);
      });

      it('should return 404 Not Found', async () => {
         const res = await api
            .post('/api/v1/user/login')
            .send({ email: 'XXXXXXXXXXXXXXX', password: 'wrong' });
         expect(res.status).toBe(404);
         expect(res.body).toHaveProperty('error');
         expect(res.body.error).toBe("User doesn't exist");
      });

      it('should return 400 Bad Request', async () => {
         const res = await api.post('/api/v1/user/login').send({ email: credentials.email, password: '' });
         expect(res.status).toBe(400);
         expect(res.body).toHaveProperty('error');
         expect(res.body.error).toBe('Invalid credentials');
      });
   });
});
