//---IMPORT---
const db = require("./models")

//---CREATE DINOS FUNCTION----
async function findOrCreateDino(nameInput, typeInput) {
  try {
    let foundDino = await db.dino.findOrCreate({
      where: {
        name: nameInput,
        type: typeInput
      }
    })
    console.log(foundDino)
  } catch (error) {
    console.error(error.message)
  }
}

// findOrCreateDino("rawr", "xd")


// --READ --returns array of all dinos
async function getAllDinos() {
    try{
        const allDinos = await db.user.findAll()
        console.log(allDinos)
    } catch (error) {
        console.log(error.message)
    }
}


// console.log(getAllDinos()) 

// --UPDATE --
async function updateDino(nameInput,typeInput) {
    try{
        const numRowsChanged = await db.dino.update({
            name: nameInput,
            type: typeInput
        }) 
    } catch(error) {
        console.log(error.message)
    }
}
// --DESTROY--