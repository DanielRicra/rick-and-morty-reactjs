import { Sequelize } from 'sequelize';
import defineCharacter from './models/Character.js';
import defineEpisode from './models/Episode.js';
import defineUser from './models/User.js';

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Character = defineCharacter(sequelize);
const Episode = defineEpisode(sequelize);
const User = defineUser(sequelize);

Character.belongsToMany(Episode, {
   through: 'character_episode',
   timestamps: false,
});
Episode.belongsToMany(Character, {
   through: 'character_episode',
   timestamps: false,
});

Character.belongsToMany(User, {
   through: 'favorite_character',
   timestamps: false,
});
User.belongsToMany(Character, {
   through: 'favorite_character',
   timestamps: false,
});

const { favorite_character: FavoriteCharacter } = sequelize.models;

export default sequelize;

export { Character, Episode, User, FavoriteCharacter };
