'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dino2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dino2.init({
    dinoName: DataTypes.STRING,
    dinoType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dino2',
  });
  return dino2;
};