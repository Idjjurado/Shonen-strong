const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animechars extends Model{}

Animechars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    charname: {
      type: DataTypes.VARCHAR(30),
      allowNull: false,
      autoIncrement: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      autoIncrement: true
    },
    workoutid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workout',
        key: 'id'
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animechars',
  }
);

module.exports = animechars;