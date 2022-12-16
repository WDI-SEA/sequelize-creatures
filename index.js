const db = require('./models')

async function dinoCrud() {
    try {
        //CREATE
        // const newDino = await db.dino.create({
        //     name: 'Littlefoot',
        //     type: 'apatosaurus'
        // })
        // console.log(newDino)


        //READ
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)

        //UPDATE
        // const numRowsChanged = await db.dino.update({name: 'Paul'}, {
        //     where: {
        //         type: 'apatosaurus'
        //     }
        // })
        // console.log(numRowsChanged)

        //DESTROY
        // const numRowsDeleted = await db.dino.destroy({
        //     where:{
        //         name: 'Paul'
        //     }
        // })
        // console.log(numRowsDeleted)





    } catch(err) {
        console.log(err)
    }
}

dinoCrud()


async function creatureCrud() {
    try {
        //CREATE
        // const newCreature = await db.creature.create({
        //     img_url: 'http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg'
        //     type: 'giant beaver'
        // })
        // console.log(newCreature)


        //READ
        // const allCreatures = await db.creature.findAll()
        // console.log(allCreatures)


        //UPDATE
        // const numRowsChanged = await db.creature.update({type: 'Paul'}, {
        //     where: {
        //         img_url: 'http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg'
        //     }
        // })
        // console.log(numRowsChanged)


        //DESTROY
        // const numRowsDeleted = await db.creature.destroy({
        //     where:{
        //         type: 'Paul'
        //     }
        // })
        // console.log(numRowsDeleted)





    } catch(err) {
        console.log(err)
    }
}

creatureCrud()