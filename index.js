const db = require('./models')

const crud = async() => {
    try {
        //CREATE
        // const newDino = await db.dino.create({
        //     name: 'Mr. T Rex',
        //     type: "a-type dinosaur",
        // })

        // const newCreature = await db.creature.create({

        //     type: "squirrel",
        //     img_url: "squirrel.com"
        // })



        //READ
        // const dinos = await db.dino.findAll()
        // const creatures = await db.creature.findAll()
        // console.log(dinos, creatures)
        
        //UPDATE
        // await db.creature.update({
        //     img_url: "https://inkart.net/wp-content/uploads/2022/12/Eastern-Grey-Squirrel.jpg",
        //     type: "chonky squirrel"
        // }, {
        //     where: {
        //         type: "squirrel"
        //     }
        // })

        // await db.dino.update({ 
        //     name: "blue",
        //     type: "velociraptor"
        // }, {
        //     where: {
        //         id: 1
        //     }
        // })


        //DESTROY

        // await db.dino.destroy({
        //     where: {
        //         id: 1
        // }
        // })

        // await db.creature.destroy({
        //     where: {
        //         id: 1
        //     }
        // })




    } catch (err) {
        console.log(err)
    }
}
crud()