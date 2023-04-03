// import the models directory
const db = require('./models')
const crud = async () => {
    try {
        create
        const newDino = await db.dino.create({
            name: 'Mr.T rex',
            type: 'A team dinosaur'
        })
        const newCreature = await db.creature.create({
            type: 'squirrel',
            img_url: 'squirrel.com'
        })
        //read
        const dinos = await db.dino.findAll()
        const creatures = await db.creature.findAll()
        console.log(dinos, creatures)
        //update
        await db.creature.update({
            img_url: 'url here',
            type: 'Chonky Squirrel'
        }, {
            where: {
                type: 'squirrel'
            }
        })
        await db.dino.update({
            name: 'blue',
            type: 'velociraptor'
        }, {
            where: {
                id: 1
            }
        })
        //destroy
        await db.dino.destroy({
            where: {
                id: 1
            }
        })
        await db.creature.destroy({
            where: {
                id:1
            }
        })
    } catch(err) {
        console.log(err)
    }
}
crud()