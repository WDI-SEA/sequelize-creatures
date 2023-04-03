const db = require('./models')

// create a new dino and a new creature
const critterCreate = async () => {
    try {
        // create a new dino
        const newDino = await db.dino.create({
            name: 'Gabe',
            type: 'Jagras'
        })
        console.log(`new dino: ${newDino.name}`)
        
        // create a new creature
        const newCreature = await db.creature.create({
            img_url: 'https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2020/02/rajang-weakness-monster-hunter-world.jpg',
            type: 'Rajang'
        })
        console.log(`new creature: ${newCreature.type}`)
        
    }
    catch (err) {
        console.log(err)
    }
}
critterCreate()

// READ all dinos & a specific creature
const critterRead = async () => {
    try {
        const allDinos = await db.creature.findAll()
        allDinos.forEach(dino => {
            console.log(`Dino name read as: ${dino.name}`)
        })
        const oneCreature = await db.creature.findOne({
            where: {
                type: 'Rajang'
            }
        })
        console.log('Rajang: ', oneCreature)
        
    }
    catch (err) {
        console.log(err)
    }
}
// critterRead()


// UPDATE dino name & creature type
const critterUpdate = async () => {
    try {
        const changeDinoName = await db.creature.update({ name: 'Gabriel'}, {
            where: {
                name: 'Gabe'
            }
        })
        const changeCreatureType = await db.creature.update({ type: 'Furious Rajang' }, {
            where: {
                type: 'Rajang'
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}
// critterUpdate()


// DESTROY a specified dino & a specified creature
const critterDestroy = async () => {
    try {
        await db.dino.destroy({
            where: {
                name: 'Gabriel'
            }
        })
        await db.creature.destroy({
            where: {
                type: 'Furious Rajang'
            }
        })
        
    }
    catch (err) {
        console.log(err)
    }
}
// critterDestroy()
