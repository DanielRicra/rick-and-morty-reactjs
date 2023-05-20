import users from '../utils/user.js';

export const login = (req, res) => {
   const { email, password } = req.body;

   const existingUser = users.find((user) => user.email === email);

   if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
   }

   if (existingUser.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
   }

   res.status(200).json({
      result: { email: existingUser.email },
      access: true,
   });
};
