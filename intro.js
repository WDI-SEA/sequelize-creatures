const db = require('./models')


//db.user.sequelizeMethod()
//DINO CRUD
const dinoCRUD = async () => {
    try {
        // C
        // const newDino = await db.dino.create({
        //     name: 't rex',
        //     type: 'meateater'
        // })
        // console.log(newDino)

        // R
        // const someDinos = await db.dino.findAll({
        //     where: {
        //         name: 't rex'
        //     }
        // })
        // const [dino, created] = await db.dino.findOrCreate({
        //     where: {
        //         name: 't rex'
        //     },
        //     defaults: {
        //         type: "loves meat"
        //     }
        // })
    
        // U
        // const newType = await db.dino.update({ type: 'friendly dinosaur' }, { 
        //         where: {
        //             firstName: 'stegosaur'
        //         }
        //     })
        //     console.log(newType)


        // D
        // const rowDelete = await db.dino.destroy({
        //     where: {
        //         name: 'tricerotops'
        //     }
        // })
        // console.log(rowDelete)

    } catch(err) {
        console.warn(err)
    }
}

// dont forget to invoke
dinoCRUD()



// CREATURE CRUD
const creatureCRUD = async () => {
    try {
        // C
        // const newCreature = await db.creature.create({
        //         img_url: 'beasty.url',
        //         type: 'beasty'
        //     })
        //     console.log(newCreature)

        // R
        // const someCreature = await db.creature.findAll({
        //     where: {
        //         type: 'unicorn'
        //     }
        // })
        // console.log(someCreature)

        // U
        // const creatureUpdate = await db.creature.update({ img_url: 'happycattown.url' }, { 
        //         where: {
        //             type: 'cat'
        //         }
        //     })
        //     console.log(creatureUpdate)

        // D
        // const rowDelete = await db.creature.destroy({
        //     where: {
        //         name: 'dog'
        //     }
        // })
        // console.log(rowDelete)

    } catch(err) {
        console.warn(err)
    }
}

// dont forget to invoke
creatureCRUD()
