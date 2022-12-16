const db = require("./models");

async function findOrCreateDino(nameInput, typeInput) {
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

 findOrCreateDino("Charlesosaurus", "Thickboi");
 findOrCreateDino("Curtosaurus", "Thickboi");
 findOrCreateDino("Jayosaurus", "Thickboi");
 findOrCreateDino("Joshosaurus", "Thickboi");

// GET ALL - returns array of dinos
async function getAllDinos(){
    try {
        const allDinos = await db.dino.findAll()
        console.log(allDinos)
    } catch (error) {
        console.error(error.message)
    }
}
//  console.log(getAllDinos())

// UODATE DINO
async function updateDino(idInput,nameInput, typeInput){
    try {
        const updateDino = await db.dino.update({name:nameInput, type:typeInput}, 
        {
            where: {
                id:idInput
            }
        }
        )
        console.log(updateDino)
    } catch (error) {
        console.error(error.message)
        
    }
}

//updateDino(1, "Charlesosaurus", "Super Thickboi")

// DELETE

async function deleteDino(idInput){
    try {
        let dinoDeleted = await db.user.destroy({
            where: {
                id: idInput,
            },
        })
    } catch (error) {
        console.error(error.message)
    }
}

deleteDino(2)



// Find Or create
async function findOrCreateCreature(imgInput, typeInput){
    try {
        let creature = await db.creature.findOrCreate({
            where:{
                img_url:imgInput,
                type: typeInput,
            }
        })
        console.log(creature)
    } catch (error) {
        console.error(error.message)
    }
}
findOrCreateCreature("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SFLGYvxSBLkcsRH3OKfbEQHaEK%26pid%3DApi&f=1&ipt=8860cdf0fcd22a38d0802e1ea6529a0c76336c3dd52d361cd05f07036dd98dd8&ipo=images", "")




// Get All


async function getAllCreatures(){
    try {
        let allCreatures = await db.creature.findAll()
        consolelog(allCreatures)
    } catch (error) {
        console.error(error.message)
    }
}



// Update

async function updateCreature(idInput, imgInput, typeInput) {
    try {
        let updateCreature = await db.creature.update({img_url:imgInput, type:typeInput},
         {
            where: {
                id: idInput,
            }
         }   )
    } catch (error) {
        console.error(error.message)
    }
}




// DELETE
async function deleteCreature(idInput){
    try {
        let deletedCreature = await db.creature.destroy({
            where:{
                id:idInput,
            }
        })
    } catch (error) {
        console.error(error.message)
    }
}