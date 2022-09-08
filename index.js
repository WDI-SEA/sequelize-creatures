const db = require("./models")

const dinoCrud = async () => {
    try {
        //  CREATE
        const newDino = await db.dino.create({
            name: "Val",
            type: "Velociraptor"
        })
        // READ
        const allDinos = await db.dino.findAll()
        const someDinos = await db.dino.findAll({
            where: {
                name: "Stephen"
            }
        })
        console.log(allDinos)
        console.log(someDinos)
        // UPDATE
        const numRowsChanged = await db.dino.update( {name: "Yas"}, {
            where: {
                name: "Yasmine"
            }
        })
        console.log(numRowsChanged)
        // DESTROY
        const numRowsDeleted = await db.dino.destroy({
            where: {
                id: "2"
            }
        })
        console.log(numRowsDeleted)
    } catch(err) {
        console.warn(err)
    }
}

dinoCrud()

const creatureCrud = async () => {
    try {
        // CREATE
        const newCreature = await db.creature.create({
            img_url: "https://static.wikia.nocookie.net/villains/images/d/dc/006pa8xx.jpg/revision/latest?cb=20150524012819",
            type: "Kreacher"
        })
        // READ
        const allCreatures = await db.creature.findAll()
        console.log(allCreatures)
        // UPDATE
        const numRowsChanged = await db.creature.update( { img_url: "https://igws.indiana.edu/images/fossilsandtime/sabertooth.jpg"}, {
            where: {
                img_url: "https://static01.nyt.com/images/2022/05/17/science/07tb-sabertooth1/07tb-sabertooth1-videoSixteenByNine3000.jpg"
            }
        }) 
        console.log(numRowsChanged)
        // DELETE
        const numRowsDeleted = await db.creature.destroy({
            where: {
                type: "Saber Tiger"
            }
        })
        console.log(numRowsDeleted)
    } catch(err) {
        console.warn(err)
    }
}

creatureCrud()