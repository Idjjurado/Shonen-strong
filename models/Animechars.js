const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Animechars extends Model{}

Animechars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    charname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recworkout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rec_workout',
        key: 'id'
      },
    },
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Animechars',
  }
);

module.exports = Animechars;
