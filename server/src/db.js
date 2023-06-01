import { Sequelize } from 'sequelize';
import createCharacterModel from './models/Character.js'
import createEpisodeModel from './models/Episode.js';
import createUserModel from './models/User.js';

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Character = createCharacterModel(sequelize);
const Episode = createEpisodeModel(sequelize);
const User = createUserModel(sequelize);

Character.belongsToMany(Episode, { through: 'character_episode', timestamps: false });
Episode.belongsToMany(Character, { through: 'character_episode', timestamps: false });

Character.belongsToMany(User, { through: 'favorite_character', timestamps: false  });
User.belongsToMany(Character, { through: 'favorite_character', timestamps: false });

export default sequelize;

export { 
   Character,
   Episode,
};