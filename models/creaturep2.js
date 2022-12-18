'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creaturep2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creaturep2.init({
    img_url: DataTypes.STRING,
    creatureType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'creaturep2',
  });
  return creaturep2;
};