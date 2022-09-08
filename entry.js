const db = require('./models')

const animalCRUD = async () => {
    try {

    // DINO
        // CREATE
        // const newDino = await db.dino.create({
        //     dinoID: 3,
        //     name: 'bobby',
        //     type: 'trex'
        // })
        // console.log(newDino)

        // READ
        // const allDinos = await db.dino.findAll()
        // const someDinos = await db.dino.findAll({
        //     where: {
        //         type: 'trex'
        //     }
        // })
        // console.log(someDinos)

        // UPDATE
        // const numDinosChanged = await db.dino.update({ name: 'tony' }, {
        //     where: {
        //         dinoID: '1'
        //     }
        // })
        // numDinosChanged
        // console.log(someDinos)

        // DESTROY
        // const numDinosDeleted = await db.dino.destroy({
        //     where: {
        //         dinoID: 3
        //     }
        // })
        // console.log(allDinos)

    // CREATURE
        // CREATE
        // const newCreature = await db.creature.create({
        //     creatureID: 5,
        //     img_url: 'test',
        //     type: 'giant beaver'
        // })
        // newCreature

        // READ
        // const allCreatures = await db.creature.findAll()
        // const someCreatures = await db.creature.findAll({
        //     where: {
        //         creatureID: ''
        //     }
        // })
        // console.log(allCreatures)

        // UPDATE
        // const numCreaturesChanged = await db.creature.update({ name: 'tony' }, {
        //     where: {
        //         type: ''
        //     }
        // })

        // DESTROY
        // const numCreaturesDeleted = await db.creature.destroy({
        //     where: {
        //         type: ''
        //     }
        // })
        // console.log(numCreaturesDeleted)
    } catch(err) {
        console.warn(err)
    }
}

animalCRUD()