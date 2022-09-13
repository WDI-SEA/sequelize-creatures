const db = require('./models')

const CRUD = async () => {
    try {
    //  await db.dino.create({
    //     name: 'Barney',
    //     type: 'Purple dino that loves you'
    //  })
    //  await db.creature.create({
    //     img_url: 'https://external.duckduckgo.com'
    //     typr: 'Hecking Chonker'
    //  })

    // const creature = await db.creature.findByPk(1)
    // console.log('creature', creature)

        // await db.dino.update({name: 'Barney Boiiii' }, {
        //     where: {
        //         id: 1
        //     }
        // })
        // const barney = await db.dino.findByPk(1)
        // console.log('updated barney', barney)

        // await db.creature.update({ type: 'Super Heckin Chonker' }, {
        //     where: {
        //         type: 'Heckin Chonker'
        //     }
        // })
        // const chonkers = await db.creature.findAll()
        // console.log('chonkers', chonkers)
        await db.creature.destroy({
            where: {
                id: 2
            }
        })
        console.log(creature)
    } catch (err) {
        console.log(err)
    }

}