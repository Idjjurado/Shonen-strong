const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

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
    usercurrwork_id: {
      type: DataTypes.TEXT,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    rectracker_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rec_workout',
        key: 'id',
      },
    },
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Goal_tracker',
  }
);

module.exports = GoalTracker;