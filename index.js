const db = require('./models')

async function dinoCrud() {
    try {
        // CREATE
        const newDino = await db.dino.create({
            name: 'Spike',
            type: 'stegosaurus'
        })
        // console.log(newDino)
        
        // READ
        const allDinos = await db.dino.findAll()

        // UPDATE
        const numRowsChange = await db.dino.update({ name: 'Mohican'}, {
            where: {
                name: 'Spike'
            }
        })
        // console.log(numRowsChange)

        // DESTROY
        const numRowsDeleted = await db.dino.destroy({
            where: {
                name: 'Mohican'
            }
        })
        // console.log(numRowsDeleted)
    } catch (err) {
        console.log(err)
    }
}

async function creatureCrud() {
    try {
        // CREATE
        const newCreature = await db.creature.create({
            img_url: 'https://cdn-images-1.medium.com/max/1200/1*a2VvYsKGApR-E1SnT5O7yQ.jpeg',
            type: 'mastodon'
        })
        // console.log(newCreature)

        // READ
        const allCreatures = await db.creature.findAll()

        // UPDATE
        const numRowsChange = await db.creature.update({ type: 'mastodonald'}, {
            where: {
                type: 'mastodon'
            }
        })
        // console.log(numRowsChange)

        // DESTROY
        const numRowsDeleted = await db.creature.destroy({
            where: {
                type: 'mastodonald'
            }
        })
        // console.log(numRowsDeleted)
    } catch (err) {
        console.log(err)
    }
}

dinoCrud()
creatureCrud()