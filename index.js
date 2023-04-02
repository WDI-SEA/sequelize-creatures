const db = require("./models");

const createDino = async () => {
  try {
    // CREATE
    const newDino = await db.dino.create({
      name: "Gabe",
      type: "Gangososaur",
    });
  } catch (error) {
    console.log(error);
  }
};

// createDino();

const findEveryDino = async () => {
  try {
    // READ
    const everydino = await db.dino.findAll();
    console.log(everydino);
  } catch (error) {
    console.log(error);
  }
};

// findEveryDino();

const updateDinoType = async () => {
  try {
    // UPDATE
    const numRowsChanged = await db.dino.update(
      {
        name: "Gabriel",
        type: "Greater Gangososaur",
      },
      {
        where: {
          // let's say you ran createDino() twice -- this will fix
          // the second instance (assuming those are the only two
          // things in the table)
          id: 2,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// updateDinoType();

const destroyDino = async () => {
  try {
    // DESTROY
    const numRowsDestroyed = await db.dino.destroy({
      where: {
        // now we've inadvertently run createDino() a third time and there
        // is no additional Gangoso-style dino -- so we'll just delete the
        // dino with PK 3 to remove the redundant record from the database
        id: 3,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// destroyDino();

const createCreature = async () => {
  try {
    // CREATE
    const newCreature = await db.creature.create({
      img_url: "https://www.andrewsmith.org/notarealurl1",
      type: "Gangososaur",
    });
  } catch (error) {
    console.log(error);
  }
};

// createCreature();

const findCreatureByPk = async (pk) => {
  try {
    // READ
    const dinoAtPk = await db.creature.findByPk(pk);
    console.log(dinoAtPk);
  } catch (error) {
    console.log(error);
  }
};

// findCreatureByPk(1);

const updateCreatureType = async () => {
  try {
    // UPDATE
    const numRowsChanged = await db.creature.update(
      {
        img_url: "https://www.andrewsmith.org/notarealurl2",
      },
      {
        where: {
          id: 1,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// updateCreatureType();

const destroyCreature = async () => {
  try {
    // DESTROY
    const numRowsDestroyed = await db.creature.destroy({
      where: {
        // now we've inadvertently run createCreature() twice,
        // so we'll just delete the creature with PK 2 to remove
        // the redundant record from the database
        id: 2,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// destroyCreature();
