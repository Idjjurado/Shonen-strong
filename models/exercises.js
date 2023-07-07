const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercises extends Model{}

Exercises.init(
  {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    weights: {
      type: DataTypes.TEXT,
      autoIncrement: true
    },
    stretching: {
      type: DataTypes.TEXT,
      autoIncrement: true
    },
    cardio: {
      type: DataTypes.TEXT,
      autoIncrement: true
    },
    push: {
      type: DataTypes.TEXT,
      autoIncrement: true,
    },
    pull: {
      type: DataTypes.TEXT,
      autoIncrement: true,
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);

module.exports = Exercises;