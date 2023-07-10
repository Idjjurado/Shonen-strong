const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Exercises extends Model{}

Exercises.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    weights: {
      type: DataTypes.TEXT,
    },
    stretching: {
      type: DataTypes.TEXT,
    },
    cardio: {
      type: DataTypes.TEXT,
    },
    push: {
      type: DataTypes.TEXT,
    },
    pull: {
      type: DataTypes.TEXT,
    },
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Exercises',
  }
);

module.exports = Exercises;