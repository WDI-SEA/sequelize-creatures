const db = require("./models");
class Dino {
  // Find or create a dino
  async findOrCreateDino(nameInput, typeInput) {
    try {
      let foundDino = await db.dino.findOrCreate({
        where: {
          name: nameInput,
          type: typeInput,
        },
      });
      console.log(foundDino);
    } catch (error) {
      console.error(error.message);
    }
  }
  // Get all dinos
  async getAllDinos() {
    try {
      const allDinos = await db.dino.findAll();
      console.log(allDinos);
    } catch (error) {
      console.error(error.message);
    }
  }
  // Update Dino
  async updateDino(idInput, nameInput, typeInput) {
    try {
      const updatedDino = await db.dino.update(
        { name: nameInput, type: typeInput },
        {
          where: {
            id: idInput,
          },
        }
      );
      console.log(updatedDino);
    } catch (error) {
      console.error(error.message);
    }
  }
  // Delete a dino
  async deleteDino(idInput) {
    try {
      let dinoDeleted = await db.dino.destroy({
        where: {
          id: idInput,
        },
      });
      console.log(dinoDeleted);
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = Dino;
