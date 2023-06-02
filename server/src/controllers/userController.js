import { HTTP_STATUS } from '../utils/constants.js';
import { User } from '../db.js';

export const login = async (req, res) => {
   const { email, password } = req.body;

   const existingUser = await User.findOne({ where: { email }});

   if (!existingUser) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ error: "User doesn't exist" });
   }

   if (existingUser.password !== password) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Invalid credentials' });
   }

   res.status(HTTP_STATUS.OK).json({
      result: { email: existingUser.email, name: existingUser.name },
      access: true,
   });
};
