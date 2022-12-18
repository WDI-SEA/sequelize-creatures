'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dino.init({
    dinoId: DataTypes.INTEGER,
    dinoName: DataTypes.STRING,
    dinoType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dino',
  });
  return Dino;
};