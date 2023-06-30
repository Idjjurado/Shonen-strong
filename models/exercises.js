const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class exercise extends Model{}

exercise.init(
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
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);

modeule.exports = exercise;