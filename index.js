const creatures = require("./models");
// const { Sequelize } = require("sequelize");

// // https://sequelize.org/docs/v6/getting-started/
// const sequelize = new Sequelize("database", "username", "password", {
//   host: "localhost",
//   dialect: "postgres",
// });

// // https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine
// // https://sequelize.org/docs/v7/other-topics/other-data-types/

// const Dino = sequelize.define("dino", {
//   // Model attributes are defined here
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: Sequelize.TEXT,
//   type: Sequelize.TEXT,
// });

const createDino = async () => {
  try {
    const dino = await db.dino.create({
      name: "Tyrannosaurus Rex",
      type: "carnivorous",
    });
    console.log(`ID is ${dino.id}`);
  } catch (err) {
    console.log(err);
  }
};
createDino();

const readDino = async () => {
  try {
    const dino = await db.dino.findOne({
      where: { name: "Tyrannosaurus Rex" },
    });
    if (dino) {
      console.log(`found ${dino.id}`);
    } else {
      console.log(`not found ${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
readDino();

const updateDino = async () => {
  try {
    const numRowsChanged = await db.dino.update(
      {
        name: "Tyrannosaurus Rex",
      },
      {
        where: {
          type: "carnivorous",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
updateDino();

const deleteDino = async () => {
  try {
    const numRowDestroyed = await db.dino.destroy({
      where: {
        type: "carnivorous",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
deleteDino();

const createCreature = async () => {
  try {
    const creature = await db.creature.create({
      img_url: "https://image.com/image.png",
      type: "carnivorous",
    });
    console.log(`creature ${creature.id}`);
  } catch (error) {
    console.log(error);
  }
};
createCreature();

const readCreature = async () => {
  try {
    const creature = await db.creature.findOne({
      where: { type: "carnivorous" },
    });
    if (creature) {
      console.log(`found ${creature.id}`);
    } else {
      console.log(`not found ${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
readCreature();

const updateCreature = async () => {
  try {
    const numRowsChanged = await db.creature.update(
      {
        img_url: "https://image.com/image.png",
      },
      {
        where: {
          type: "carnivorous",
        },
      }
    );
    console.log(`${numRowsChanged} rows updated.`);
  } catch (error) {
    console.log(error);
  }
};
updateCreature();

const deleteCreature = async () => {
  try {
    const numRowsDestroyed = await db.creature.destroy({
      where: {
        type: "carnivorous",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
deleteCreature();
