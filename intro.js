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
        // await db.dino.create ({
        //     name: 'barney3',
        //     type: 'blue dino'
        // })

        // await db.creature.create ({
        //     name: 'chonker3.url',
        //     type: 'light chonker'
        // })

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
        // const dino = await db.dino.findOne({
        //     where: {
        //         name: 'Barney'
        //     }
        // })
        // const creature = await db.creature.findByPk(1)
        // console.log('creature:', creature)

        // U
        // const newType = await db.dino.update({ type: 'friendly dinosaur' }, { 
        //         where: {
        //             firstName: 'stegosaur'
        //         }
        //     })
        //     console.log(newType)
        // await db.dino.update({ name: 'Barney BOIIII'}, {
        //     where: {
        //         id: 1
        //     }
        // })
        // // find barney and check the update
        // const barney = await db.dino.findByPk(1)
        // console.log('updated barney', barney)
        // await db.creature.update({ type: 'super heckin chonker'}, {
        //     where: {
        //         type: 'light chonker'
        //     }
        // })
        // const chonkers = await db.creature.findAll()
        // console.log('chonkers:', chonkers)

        // D
        // const rowDelete = await db.dino.destroy({
        //     where: {
        //         name: 'tricerotops'
        //     }
        // })
        // console.log(rowDelete)
        await db.creature.destroy ({
                where: {
                    id: 2
                }
        })
        const chonkers = await db.creature.findAll()
        console.log('chonkers:', chonkers)


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
