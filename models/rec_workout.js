const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rec_workout extends Model{}

Rec_workout.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.TEXT,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rec_workout',
  },
);

module.exports = Rec_workout;