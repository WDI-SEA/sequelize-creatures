const db = require('./models')
const cat = 'http://placekitten.com/'

// DINOS

// CREATE
async function createDino() {
    try {
        const newDino = await db.dino.create({
            name: 'Barney',
            type: 'big purple dinosaur'
        })
        console.log(newDino)
    } catch(err) {
        console.warn(err)
    }
}

createDino()

// READ
async function readOneDino() {
    try {
        const foundDino = await db.dino.findOne({
            where:{
                name: 'Barney'
            }
        })
        console.log(foundDino)
    } catch(error) {
        console.warn(error)
    }
}

readOneDino()

// UPDATE
async function updateDino() {
    try {
        const numRowsChanged = await db.dino.update({type: 'big purple dinosaur that loves you'}, {
            where: {
                name: 'Barney'
            }
        })
        console.log(numRowsChanged)
    } catch(err) {
        console.warn(err)
    }
}

updateDino()

// DESTROY
async function destroyDino() {
    try {
        const numRowsDeleted = await db.dino.destroy({
            where: {
                name: 'Littlefoot'
            }
        })
        console.log(numRowsDeleted)
    } catch(error) {
        console.warn(error)
    }
}

destroyDino()

// CREATURES

// CREATE
async function createCreature() {
    try {
        const newCreature = await db.creature.create({
            img_url: `${cat}500/500`,
            type: 'kitten'
        })
    } catch(error) {
        console.warn(error)
    }
}

createCreature()

// READ
async function findOrCreateCreature() {
    try {
        const [creature, created] = await db.creature.findOrCreate( {
            where: { type: 'cat' },
            defaults: { img_url: `${cat}1000/1000` }
        })
        console.log(creature)
        console.log(created)
    } catch(error) {
        console.warn(error)
    }
}

findOrCreateCreature()

// UPDATE
async function updateCreature() {
    try {
        const numRowsUpdated = await db.creature.update( { img_url: `${cat}200/200` }, {
            where: { type: 'kitten' }
        })
        console.log(numRowsUpdated)
    } catch(error) {
        console.warn(error)
    }
}

updateCreature()

// DESTROY
async function destroyCreature() {
    try {
        const numRowsDeleted = await db.creature.destroy({ where: { type: 'cat' } })
        console.log(numRowsDeleted)
    } catch(error) {
        console.warn(error)
    }
}

destroyCreature()