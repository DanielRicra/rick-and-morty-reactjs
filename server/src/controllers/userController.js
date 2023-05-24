import { HTTP_STATUS } from '../utils/constants.js';
import users from '../utils/user.js';

export const login = (req, res) => {
   const { email, password } = req.body;

   const existingUser = users.find((user) => user.email === email);

   if (!existingUser) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ error: "User doesn't exist" });
   }

   if (existingUser.password !== password) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Invalid credentials' });
   }

   res.status(HTTP_STATUS.OK).json({
      result: { email: existingUser.email },
      access: true,
   });
};
