const db = require('./models')

// CREATE

// READ

// UPDATE

// DESTROY

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
            img_url: 'https://assets.vg247.com/current//2018/01/monster_hunter_world_kirin_2.jpg',
            type: 'Kirin'
        })
        console.log(`new creature: ${newCreature.type}`)
        
    }
    catch (err) {
        console.log(err)
    }
}
critterCreate()

const critterRead = async () => {
    try {
        
    }
    catch (err) {
        console.log(err)
    }
}
// critterRead()

const critterUpdate = async () => {
    try {
        
    }
    catch (err) {
        console.log(err)
    }
}
// critterUpdate()

const critterDestroy = async () => {
    try {
        
    }
    catch (err) {
        console.log(err)
    }
}
// critterDestroy()
