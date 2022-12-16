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
        // console.log(foundDino)
    } catch (error) {
        console.error(error.message)
    }
}
// findOrCreateDino()


// --READ --returns array of all dinos
async function getAllDinos() {
    try {
        const allDinos = await db.user.findAll()
        // console.log(allDinos)
    } catch (error) {
        console.log(error.message)
    }
}
//getAllDinos() 

// --UPDATE --
async function updateDino(idInput, nameInput, typeInput) {
    try {
        const updatedDino = await db.dino.update(
            { name: nameInput, type: typeInput },
            {
                where: {
                    id: idInput,
                }
            })
        // console.log(updatedDino) 
    } catch (error) {
        console.log(error.message)
    }
}
// updateDino()

// --DESTROY-- delete a dino 
async function deleteDino(idInput) {
    try {
        let deletedDino = await db.dino.destroy({
            where: {
                id: idInput
            }
        })
        // console.log(deletedDino)
    } catch (error) {
        console.log(error.message)
    }
}
// deleteDino()


// ----CREATURES------
//---CREATE---
async function createCreature(imgInput, typeInput) {
    try {
        let creature = await db.creature.findOrCreate({
            where: {
                img_url: imgInput,
                type: typeInput
            }
        })
        console.log(creature)
    } catch (error) {
        console.error(error.message)
    }
}
// createCreature()

//---READ ALL---
async function allCreatures() {
    try {
        let allCreatures = await db.creature.findAll()
        console.log(allCreatures)
    } catch (error) {
        console.log(error.message)
    }
}
// allCreatures()

//---UPDATE---
async function updateCreature(idInput, imgInput, typeInput) {
    try {
        let updateCreature = await db.creature.update(
            { img_url: imgInput, type: typeInput },
            {
                where: {
                    id: idInput,
                }
            })
    } catch (error) {
        console.log(error.message)
    }
}
// updateCreature(1, 'google.com', 'monster')

//---DESTROY/DELETE---
async function deleteCreature(idInput) {
    try {
        let deleteCreature = await db.creature.destroy({
            where: {
                id: idInput,
            }
        })
        console.log(deleteCreature)
    } catch (error) {
        console.log(error.message)
    }
}
// deleteCreature(1)