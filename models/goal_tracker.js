const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GoalTracker extends Model{}

GoalTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: { // add the time addition
      type: DataTypes.DATE,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    currentWorkout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workout',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goal_tracker',
  }
);

module.exports = GoalTracker;