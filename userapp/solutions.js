const db = require('./models')

db.user.sequelizeMethod()

const dinosaurCrud = async () => {
    try {

        // CREATE
        // const newDinosaur = await db.dinosaur.create({
        //     name:'Sarah'
        //     type: 'Parasaurolophus'
        // })
        // const newDinosaur = await db.dinosaur.create ({
        //     name: 'Tiny'
        //     type: 'Titanosaurus'
        // })
        // READ
        // const allDinosaur = await db.dinosaur.findAll()
        // console.log(allDinosaur)

        // const oneDinosaur = await db.dinosaur.findAll({
        //     where: {
        //         type: 'Parasaurolophus'
        //     }
        // })
        // console.log(oneDinosaur)
        // UPDATE
        // const tinyUpdate = await db.dinosaur.update({name: 'Big tiny'}, {
        //     where: {
        //         name: 'Big Tiny'
        //     }
        // })
        // console.log(tinyUpdate)
        // DELETE
        // const dinoDeletus = await db.dinosaur.destroy ({
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
// const addCreature = await db.creature.create ({
//     name: 'Happy'
//     type: 'Harpia'
// }) 
// const newCreature = await db.creature.create ({
//     name: 'Taylor'
//     type: 'Minotaur'
// })
// READ
// const allCreatures = await db.creatures.findAll()
// console.log(allCreatures)
// const oneCreature = await db.creature.findAll ({
//     where:  {
//         name: 'Happy'
//     }
// })
//   console.log(oneCreature)     
// UPDATE
// const taylorUpdate = await db.creature.update({name: 'Mickie'}, {
//     where: {
//         name: 'Mickie'
//     }
// }) 
// console.log(taylorUpdate)
// DESTROY
// const kablooiCreature = await db.creature.destroy ({
//     where: {
//         type: 'Harpia'
//     }
// })
// console.log(kablooiCreature)
    } catch (err) {
        console.warn(err)
    }
}

creatureCrud()