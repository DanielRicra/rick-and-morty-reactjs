import app from "./app.js";
import sequelize from './db.js';

const PORT = 3001;

sequelize
   .sync({ force: false })
   .then(() => {
      console.log('Synced db.');
   })
   .catch((error) => {
      console.log('Failed to sync db: ' + error.message);
   });
   
app.listen(PORT, () => {
   console.log(`server is running on port http://localhost:${PORT}`);
});
