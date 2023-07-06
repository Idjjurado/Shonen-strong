const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model{}

Workout.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workoutname: {
      type: DataTypes.VARCHAR(30),
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recworkout_id: {
      type: DataTypes.VARCHAR(30),
      references: {
        model: 'rec_workout',
        key: 'id',
      },
    },
    Animecharsworkout_id: {
      type: DataTypes.VARCHAR(30),
      references: {
        model: 'animechars',
        key: 'id',
      },
    },
    goalWork_id: {
      type: DataTypes.TEXT,
      references: {
        model: 'goal_tracker',
        key: 'id',
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',

  },
);

module.exports = Workout;