
// const dinos = require('./models/dino')
// const creatures = require('./models/creature')
const db = require('./models')

const dinoCRUD = async () => {
    try {
        //create
        // const newDino = await db.dino.create({
        //     name: 'James Bond',
        //     type: 'Giant'
        // })
        // console.log(newDino)
        //read
        // const allDino = await db.dino.findAll()
         // UPDATE
        // const dinoEdit = await db.dino.update({ type: 'dino dan'}, {
        //     where : {
        //         name: 'Dan Dino'
        //     }
        // })
        // console.log(dinoEdit)
        // DESTROY
        // const destroyDino = await db.user.destroy({
        //     where: {
        //         name: 'Dan Dino'
        //     }
        // })
        // console.log(destroyDino)

    } catch(err) {
        console.log(err)
    }
}

const creatureCRUD = async () => {
    try {
        //create
        // const newCreature = await db.creature.create({
        //     img_url: 'https://i.imgur.com/QECETeH.png',
        //     type: 'Otter'
        // })
        //read
        // const allCreatures = await db.creature.findAll()
         // UPDATE
        // const creatureEdit = await db.creature.update({ img_url: 'https://i.imgur.com/t1j42SQ.jpeg'}, {
        //     where : {
        //         type: 'Otter'
        //     }
        // })
        // console.log(creatureEdit)
        // DESTROY
        // const destroyCreature = await db.creature.destroy({
        //     where: {
        //         type: 'Otter'
        //     }
        // })
        // console.log(destroyCreature)

    } catch(err) {
        console.log(err)
    }
}


// dinoCRUD()
// creatureCRUD()