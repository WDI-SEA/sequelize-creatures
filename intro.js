const db = require('./models')

// db.user.sequelizeMethod()




const dinoCRUD = async () => {
    try {
        // // CREATE
        // const newDino = await db.dino.create({
        //     name: 'T-Rex',
        //     type: 'Carnivore'
        // })
        // console.log(newDino)
        // //----------------------------------------------------------------
        // // READ
        // const allDinos = await db.dino.findAll() // find all dinos
        // const someDinos = await db.dino.findAll({
        //     where: {
        //         name: 'T-Rex'
        //     }
        // })
        // const [dino, created] = await db.dino.findOrCreate({
        //     where: {
        //         // what we are searching for
        //         type: 'Carnivore'
        //     },
        //     // data to add if we are creating
        //     defaults: {
        //         name: 'T-Rex',
        //         type: 'Carnivore'
        //     }
        // })

        // console.log(dino)
        // console.log(`the dino was created: ${created}`)
        // //--------------------------------------------------------------------
        // // UPDATE
        // // updates return the number of rows that were changed
        // // db.model.update({ what to change }, { where: { where clause } })
        // const numRowsChanged = await db.dino.update({ type: 'Super Carnivore' }, {
        //     where: {
        //         name: 'T-Rex'
        //     }
        // })
        // console.log(numRowsChanged)
        // //--------------------------------------------------------------------
        // // DESTROY
        // const numRowsDeleted = await db.dino.destroy({
        //     where: {
        //         name: 'T-Rex'
        //     }
        // })
        // console.log(numRowsDeleted)
    } catch(err) {
        console.warn(err)
    }
}

// // don't forget to invoke!
// dinoCRUD()


const creatureCRUD = async () => {
    try {
        // // CREATE
        // const newCreature = await db.creature.create({
        //     img_url: 'insert img url',
        //     type: 'Mammoth'
        // })
        // console.log(newCreature)
        // //------------------------------------------------------------------
        // // READ
        // const allCreatures = await db.creature.findAll() // find all creatures
        // const someCreatures = await db.creature.findAll({
        //     where: {
        //         type: 'Mammoth'
        //     }
        // })
        // console.log(allCreatures)
        // console.log(someCreatures)
        // const [creature, created] = await db.creature.findOrCreate({
        //     where: {
        //         type: 'Mammoth'
        //     },
        //     defaults: {
        //         img_url: 'insert img url',
        //         type: 'Mammoth'
        //     }
        // })
        // console.log(creature)
        // console.log(`the dino was created: ${created}`)
        // //------------------------------------------------------------------
        // // UPDATE
        // // updates return the number of rows that were changed
        // // db.model.update({ what to change }, { where: { where clause } })
        // const numRowsChanged = await db.creature.update({ type: 'Mega Mammoth' }, {
        //     where: {
        //         img_url: 'insert img url'
        //     }
        // })
        // console.log(numRowsChanged)
        // //------------------------------------------------------------------
        // // DESTROY
        // const numRowsDeleted = await db.creature.destroy({
        //     where: {
        //         type: 'Mammoth'
        //     }
        // })
        // console.log(numRowsDeleted)

    } catch(err) {
        console.warn(err)
    }
}

// // don't forget to invoke!
// creatureCRUD()