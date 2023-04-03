// import models folder
const db = require("./models")

const dinoCrud = async () => {
    try {
        // CREATE
        // const newDino = await db.dinos.create({
        //     name: "Spike",
        //     type: "Stegosauras",
        // })
        // READ
        // const dinos = await db.dinos.findAll()
        // console.log(dinos)
        // UPDATE
        // await db.dinos.update({
        //     id: 2
        // }, {
        //     where: {
        //         type: "Stegosauras"
        //     }
        // })

        // // DESTROY
        await db.dinos.destroy({
            where:{
                id: 2
            }
        })
    } catch(err){
        console.log(err)
    }
}
const creatureCrud = async () => {
    try {
        // CREATE
        // const newCreature = await db.creatures.create({
        //     img_url: "http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg",
        //     type: "Giant Beaver",
        // })
        // const creatures = await db.creatures.findAll()
        // console.log(creatures)
        // await db.creatures.update({
        //     id: 2
        // }, {
        //     where: {
        //         type: "Giant Beaver"
        //     }
        // })
        await db.creature.destroy({
            where: {
                id: 2
            }
        })
    } catch(err){
        console.log(err)
    }
}
dinoCrud()
creatureCrud()