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
      type: DataTypes.STRING,
    },
    stretching: {
      type: DataTypes.STRING,
    },
    cardio: {
      type: DataTypes.STRING,
    },
    push: {
      type: DataTypes.STRING,
    },
    pull: {
      type: DataTypes.STRING,
    },
    workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workout',
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercises',
  }
);

module.exports = Exercises;
