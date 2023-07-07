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
        model: 'Rec_workout',
        key: 'id',
      },
    },
    Animecharsworkout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Animechars',
        key: 'id',
      },
    },
    goalWork_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Goal_tracker',
        key: 'id',
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout',

  },
);

module.exports = Workout;