import { DataTypes } from 'sequelize';

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const createCharacterModel = (sequelize) => {
   return sequelize.define(
      'character',
      {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         name: { type: DataTypes.STRING, allowNull: false },
         status: { type: DataTypes.STRING, allowNull: false },
         species: {
            type: DataTypes.ENUM('alive', 'dead', 'unknown'),
            allowNull: false,
         },
         gender: {
            type: DataTypes.ENUM('male', 'female', 'unknown', 'genderless'),
            allowNull: false,
         },
         type: DataTypes.STRING,
         image: { type: DataTypes.STRING, allowNull: false },
         origin: { type: DataTypes.STRING, allowNull: false },
         location: { type: DataTypes.STRING, allowNull: false },
      },
      {
         timestamps: false,
      }
   );
};

export default createCharacterModel;
