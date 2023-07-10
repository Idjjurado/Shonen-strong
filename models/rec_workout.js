const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Rec_workout extends Model{}

Rec_workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Rec_workout',
  },
);

module.exports = Rec_workout;