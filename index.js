const db = require('./models')

const CRUD = async () => {
    try {
        // CREATE
        // make new dino
        // await db.dino.create({
        //     name: 'Barney',
        //     type: 'Purple dino that loves you'
        // })
        // await db.creature.create({
        //     img_url: 'chonker',
        //     type: 'Heckin Chonker'
        // })
        // READ
        // const dino = await db.dino.findOne({
        //     where: {
        //         name: 'Barney'
        //     }
        // })
        // console.log('Barney:', dino)
        // const creature = await db.creature.findByPk(1)
        // console.log('creature:', creature)

        // UPDATE
        // await db.dino.update({ name: 'Barney Boiiii' }, {
        //     where: {
        //         id: 1
        //     }
        // })
        // // find barney and check the update
        // const barney = await db.dino.findByPk(1)
        // console.log('updated barney:', barney)
        // await db.creature.update({ type: 'Super Heckin Chonker' }, {
        //     where: {
        //         type: 'Heckin Chonker'
        //     }
        // })
        // DESTROY
        await db.creature.destroy({
            where: {
                id: 2
            }
        })
        const chonkers = await db.creature.findAll()
        console.log('chonkers:', chonkers)

    } catch (err) {
        console.log(err)
    }
}

CRUD()