const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

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
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recworkout_id: {
      type: DataTypes.STRING,
      references: {
        model: 'rec_workout',
        key: 'id',
      },
    },
    Animecharsworkout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'animechars',
        key: 'id',
      },
    },
    goalWork_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'goal_tracker',
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

module.exports = Workout;
