const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model{}

Exercise.init(
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
    Workout_id: {
      type: DataTypes.VARCHAR(30),
      references: {
        model: 'workout',
        key: 'id',
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);

module.exports = Exercise;