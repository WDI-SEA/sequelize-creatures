// import the models directory
const db = require('./models')

const crud = async () => {
    try {
        // CREATE
        // const newDino = await db.dino.create({
        //     name: 'Mr. T rex',
        //     type: "A-team dinosaur"
        // })

        // const newCreature = await db.creature.create({
        //     type: "squirrel",
        //     img_url: "squirrel.com"
        // })
        // READ
        // const dinos = await db.dino.findAll()
        // const creatures = await db.creature.findAll()
        // console.log(dinos, creatures)
        // UPDATE
        // await db.creature.update({
        //     img_url: "http://dfwwildlife.org/wp-content/uploads/2018/09/mammal-3350850-e1536268405185.jpg",
        //     type: "Chonky Squirrel"
        // }, {
        //     where: {
        //         type: "squirrel"
        //     }
        // })

        // await db.dino.update({ 
        //     name: "blue",
        //     type: "velociraptor, Parvez belives"
        //  }, {
        //     where: {
        //         id: 1
        //     }
        //  })
        // DESTROY
        // await db.dino.destroy({
        //     where: {
        //         id: 1
        //     }
        // })

        // await db.creature.destroy({
        //     where: {
        //         id: 1
        //     }
        // })
    } catch(err) {
        console.log(err)
    }
}

crud()

