const db = require('./models')

const CRUD =asunc () => {
    try {
        //create
        //make new dino
        // await db.dino.create({
        //     name: 'Spinosaurus',
        //     type: 'Spinosaurus aegyptiacus'
        // })
        // await db.creature.create({
        //     img_url:'https://i1.sndcdn.com/avatars-000495996573-7xpt1u-t500x500.jpg'
        //     type: 'hecking chonker'
        // })
        //read
        // const dino = await db.dino.findOne({
        //     where: {
        //         name: 'Spinosaurus'
        //     }
        // })
        // console.log('Spinosaurus:', dino)
        // const creature = await db.creature.findByPk(1)
        // console.log('creature:', creature)
        //update
        // await db.dino.update({ name: 'Spinosaurus'}, {
        //     where: {
        //         id:1
        //     }
        // })
        // await db.creature.update({ type: 'Super Heckin Chonker' }, {
        //     where: {
        //         type: 'Heckin Chonker'
        //     }
        // })
        // const chonkers = db.creature.findAll()
        // console.log('chonkers', chonkers)
        //destroy
        // await db.creature.destroy({
        //     where: {
        //         id: 2
        //     }
        // })

    }

} catch (err) {
    console.log(err)
}

CRUD()