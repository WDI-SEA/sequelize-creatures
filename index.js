const db = require('./models')

async function dinoCrud() {
    try {
        const newDino = await db.dino.create({
            identification: 10,
            name: 'Billy',
            type: 'Stegasaurus'
        })
        // console.log(newDino)
        // read
        const allDinos = await db.user.findAll()
        // console.log(allDinos)
    
        // const [dino, created] = await db.dino.findOrCreate({
        //     identification: 22
        // },
        // defaults: {
        //     name: 'richard',
        //     type: 'albino'
        // })
        // console.log('was ', created)
        // console.log(allDinos)
        // update
        const numRowsChange = await db.dino.update({ name: 'steve' }, {
            where: {
                name: 'richard'
            }
        })
        console.log(numRowsChange)
        // destroy
        const numRowsDeleted = await db.user.destroy({
            where: {
                name: 'richard'
            }
        })
        console.log(numRowsDeleted)
    } catch(err) {
        console.log(err)
    }
}
// dinoCrud()

async function creatureCrud() {
    try {
        const newCreat = await db.creature.create({
            identification: 12,
            img_url: 'broken link',
            type: 'huuuge sloth'
        })
        // console.log(newCreat)

        //read
        const allCreats = await db.creature.findAll()
        // console.log(allCreats)
        // could do find or create, but i broke the connect to the database somehow
        //update
        const createChange = await db.creature.update({ img_url: 'working link' }, {
            where: {
                type: 'huuuge sloth'
            }
        })
        // console.log(createChange)

        // destroy
        const numRowsDeleted = await db.creature.destroy({
            where: {
                type: 'huuuge sloth'
            }
        })
        console.log(numRowsDeleted)

    } catch(err) {
        console.log(err)
    }
}

creatureCrud()