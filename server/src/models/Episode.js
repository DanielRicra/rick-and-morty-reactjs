import { DataTypes } from 'sequelize';

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const createEpisodeModel = (sequelize) => {
   return sequelize.define(
      'episode',
      {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         name: { type: DataTypes.STRING, allowNull: false },
         airDate: { type: DataTypes.STRING, allowNull: false },
         episode: { type: DataTypes.STRING, allowNull: false },
      },
      {
         timestamps: false,
      }
   );
};

export default createEpisodeModel;
