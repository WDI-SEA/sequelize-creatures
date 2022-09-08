const db = require('./models')

const dinosaurCrud = async () => {
    try {

        // CREATE
        // const newDino = await db.dino.create({
        //     name:'Sarah'
        //     type: 'Parasaurolophus'
        // })
        // const newDino = await db.dino.create ({
        //     name: 'Tiny'
        //     type: 'Titanosaurus'
        // })
        // READ
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)

        // const oneDino = await db.dino.findAll({
        //     where: {
        //         type: 'Parasaurolophus'
        //     }
        // })
        // console.log(oneDino)
        // UPDATE
        // const tinyUpdate = await db.dino.update({name: 'Big tiny'}, {
        //     where: {
        //         name: 'Big Tiny'
        //     }
        // })
        // console.log(tinyUpdate)
        // DELETE
        // const dinoDeletus = await db.dino.destroy ({
        //     where: {
        //         name: 'Sarah'
        //     }
        // })
        // console.log(dinoDeletus)
    } catch(err) {
        console.warn(err)
    }
}

dinosaurCrud()

const creatureCrud