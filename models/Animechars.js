const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Animechars extends Model {}

Animechars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    charname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recworkout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rec_workout',
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animechars',
  }
);

module.exports = Animechars;
