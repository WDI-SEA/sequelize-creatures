const db = require('./models')

db.user.sequelizeMethod()

const dinosaurCrud = async () => {
    try {

        // CREATE
        // const newDino = await db.dino.create({
        //     name:'Sarah'
        //     type: 'Parasaurolophus'
        // })
        // const newDino = await db.dino.create ({
        //     name: 'Tiny'
        //     type: 'Titanosaurus'
        // })
        // READ
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)

        // const oneDino = await db.dino.findAll({
        //     where: {
        //         type: 'Parasaurolophus'
        //     }
        // })
        // console.log(oneDino)
        // UPDATE
        // const tinyUpdate = await db.dino.update({name: 'Big tiny'}, {
        //     where: {
        //         name: 'Big Tiny'
        //     }
        // })
        // console.log(tinyUpdate)
        // DELETE
        // const dinoDeletus = await db.dino.destroy ({
        //     where: {
        //         name: 'Sarah'
        //     }
        // })
        // console.log(dinoDeletus)
    } catch(err) {
        console.warn(err)
    }
}

// dinosaurCrud()

const creatureCrud = async () => {
    try {
 //CREATE
const addCreature = await db.creature.create ({
    name: 'Happy'
    type: 'Harpia'
}) 
const newCreature = await db.creature.create ({
    name: 'Taylor'
    type: 'Minotaur'
})
    } catch (err) {
        console.warn(err)
    }
}