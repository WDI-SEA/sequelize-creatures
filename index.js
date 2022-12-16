const Dino = require("./Dino");

let dino = new Dino();

dino.deleteDino(6);

dino.getAllDinos();

// /**
//  * FIND OR CREATE
//  */
// async function findOrCreateDino(nameInput, typeInput) {
//   try {
//     let foundDino = await db.dino.findOrCreate({
//       where: {
//         name: nameInput,
//         type: typeInput,
//       },
//     });
//     console.log(foundDino);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// // findOrCreateDino("Jayosaurus", "Thickboi");

// /**
//  * GET ALL DINOS
//  */

// async function getAllDinos() {
//   try {
//     const allDinos = await db.dino.findAll();
//     console.log(allDinos);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// // getAllDinos();

// /**
//  * UPDATE A DINO
//  */

// async function updateDino(idInput, nameInput, typeInput) {
//   try {
//     const updatedDino = await db.dino.update(
//       { name: nameInput, type: typeInput },
//       {
//         where: {
//           id: idInput,
//         },
//       }
//     );
//     console.log(updatedDino);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// // updateDino(4, "Jayosaur", "Extra Thickboi");

// /**
//  * DELETE A DINO
//  */

// async function deleteDino(idInput) {
//   try {
//     let dinoDeleted = await db.dino.destroy({
//       where: {
//         id: idInput,
//       },
//     });
//     console.log(dinoDeleted);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// deleteDino(5);

/***
 * Creatures
 */
/**
 * FIND OR CREATE
 */
async function findOrCreateCreature(imgInput, typeInput) {
  try {
    let creature = await db.creature.findOrCreate({
      where: {
        img_url: imgInput,
        type: typeInput,
      },
    });
    console.log(creature);
  } catch (error) {
    console.error(error.message);
  }
}
// findOrCreateCreature(
//   "https://images.unsplash.com/photo-1593175216843-9f1be1c3e468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoaWNrJTIwYm9pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   "Cowboi"
// );
/**
 * GET ALL
 */

async function getAllCreatures() {
  try {
    let allCreatures = await db.creature.findAll();
    console.log(allCreatures);
  } catch (error) {
    console.error(error.message);
  }
}

// getAllCreatures();
/**
 * UPDATE
 */

async function updateCreature(idInput, imgInput, typeInput) {
  try {
    let updatedCreature = await db.creature.update(
      { img_url: imgInput, type: typeInput },
      {
        where: {
          id: idInput,
        },
      }
    );
  } catch (error) {
    console.error(error.message);
  }
}

// updateCreature(1, "newurl", "new type");
/**
 * DELETE
 */

async function deleteCreature(idInput) {
  try {
    let deletedCreature = await db.creature.destroy({
      where: {
        id: idInput,
      },
    });
    console.log(deletedCreature);
  } catch (error) {
    console.error(error.message);
  }
}

deleteCreature(1);
