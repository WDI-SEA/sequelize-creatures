'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Dinosaurs', [{
        name:"Littlefoot",
        type:"apatosaurus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Cera",
        type:"triceratops",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Ducky",
        type:"saurolophus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Petrie",
        type:"pteranodon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Spike",
        type:"stegosaurus",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Dinosaurs', null, {});
  }
};