const Sequelize = require('sequelize');
const db = require('./models')


async function createDino() {
    try {
      // the create promise returns the
      // new row of data that has been created
      // (otherwise it throws an error)
      const newDino = await db.dino.create({
          name: 'Bing Chillin',
          type: 'Boing',
      })

      console.log(newDino)

    } catch (err) {
      console.log(err)
    }
  }
  
//   createDino()


  async function createCreature() {
    try {
      // the create promise returns the
      // new row of data that has been created
      // (otherwise it throws an error)
      const newCreature = await db.creature.create({
          img_url: 'Creature',
          type: 'Test',
      })

      console.log(newCreature)

    } catch (err) {
      console.log(err)
    }
  }

//   createCreature();


// Read all dinos
async function readDinos() {
    try {
      const allDinos = await db.dino.findAll();
      console.log(allDinos);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Update a dino
  async function updateDino(id, data) {
    try {
      const updatedDino = await db.dino.update(data, { where: { id } });
      console.log(updatedDino);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Delete a dino
  async function deleteDino(id) {
    try {
      const deletedDino = await db.dino.destroy({ where: { id } });
      console.log(deletedDino);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Create a new creature
  async function createCreature() {
    try {
      const newCreature = await db.creature.create({
        img_url: 'Creature',
        type: 'Test',
      });
      console.log(newCreature);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Read all creatures
  async function readCreatures() {
    try {
      const allCreatures = await db.creature.findAll();
      console.log(allCreatures);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Update a creature
  async function updateCreature(id, data) {
    try {
      const updatedCreature = await db.creature.update(data, { where: { id } });
      console.log(updatedCreature);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Delete a creature
  async function deleteCreature(id) {
    try {
      const deletedCreature = await db.creature.destroy({ where: { id } });
      console.log(deletedCreature);
    } catch (err) {
      console.log(err);
    }
  }

  createDino();  // Creates a new dino
readDinos();   // Reads all dinos
updateDino(1, { name: 'Robert' }); // Updates dino with id=1
deleteDino(2); // Deletes dino with id=2

