//require modules
const db = require('./models')

// CREATE
async function findOrCreateDino(nameInput, typeInput) {
    try {
        const [name, created] = await db.dino.findOrCreate({
            where: {
                name: nameInput,
                type: typeInput
            },
            defaults: {
                name: nameInput,
                type: typeInput
            }
        })
        console.log('was dino created?', created)
        console.log(dino.name)

    }catch (err) {
        console.log(err)
    }
}

// findOrCreateDino('eminem','raptor')

async function findOrCreateCreature(typeInput, urlInput) {
    try {
        const [name, created] = await db.creature.findOrCreate({
            where: {
                type: typeInput,
                img_url: urlInput
            },
            defaults: {
                type: typeInput,
                img_url: urlInput
            }
        })
        console.log('was creature created?', created)
        console.log(creature.type)

    }catch (err) {
        console.log(err)
    }
}

// findOrCreateCreature('Basilosaurus', '') 


async function createDino (nameInput, typeInput) {
    try{
        const newDino = await db.dino.create({
            name: nameInput,
            type: typeInput

        })
    } catch (err) {
        console.log(err)
    }
}

// createDino('bisciut', 'doggo')

async function createCreature (typeInput, urlInput) {
    try{
        const newCreature = await db.creature.create({
            type: typeInput,
            img_url: urlInput
        })
    } catch (err) {
        console.log(err)
    }
}

// createCreature('annie', 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS-hR9X4WsOeaiSiet4kO23Kjnsbg8PwxGOwIfDu7NlIllX-8GkBSEJHc7fLNF-P_eltsVKblXyRDatmy0')

//READ
async function allDinos () {
    try{
        const allDinos = await db.dino.findAll()
        console.log(allDinos)
        allDinos.name.forEach(d => console.log(d.name))
    } catch (err) {
        console.log(err)
    }
}

// allDinos()


async function allCreatures () {
    try{
        const allCreatures = await db.creature.findAll()
        console.log(allCreatures)
        allCreature.type.forEach(c => console.log(c.type))
    } catch (err) {
        console.log(err)
    }
}

// allCreatures()

async function findDinos (nameInput) {
    try {
        const allDinos = await db.dino.findAll({
                where: {
                    name: nameInput
                }
            })
            console.log(allDinos)
    } catch (err) {
        console.log(err)
        
    }
}

// findDinos('bisciut')

async function findCreatures (typeInput) {
    try {
        const allCreatures = await db.creature.findAll({
            where: {
                type: typeInput
            }
        })
        console.log(allCreatures)
    } catch (err) {
        console.log(err)
        
    }
}

// findCreatures('annie')

async function oneDino (nameInput) {
    try {
        const oneDino = await db.dino.findOne({
            where: {
                name: nameInput
            }
        })
        console.log(oneDino)
    } catch (err) {
        console.log(err)
    }
}

// oneDino('tiny')


async function oneCreature (typeInput) {
    try {
        const oneCreature = await db.creature.findOne({
            where: {
                type: typeInput
            }
        })
        console.log(oneCreature)
    } catch (err) {
        console.log(err)
    }
}

// oneCreature('Basilosaurus')

//UPDATE

async function updateDino (idInput, nameInput, typeInput) {
    try {
        const updateDino = await db.dino.update({ 
            name: nameInput, type: typeInput, }, {
            where: {
                id: idInput,
            }
        })
        console.log(updateDino)        
    } catch (err) {
        console.log(err)
        
    }
    
}

// updateDino()

async function updateCreature (idInput, typeInput, urlInput) {
    try {
        const updateCreature = await db.creature.update({ 
            img_url: urlInput, type: typeInput, }, {
            where: {
                id: idInput,
            }
        })
        console.log(updateCreature)        
    } catch (err) {
        console.log(err)
        
    }
    
}

// updateCreature()

//DESTROY

async function deleteDino (nameInput) {
    try {
        const deleteDino = await db.dino.destroy({
            where: {
                name: nameInput
            }
        })
        console.log(deleteDino)        
    } catch (err) {
        console.log(err)
    }
}

// deleteDino('bisciut')

async function deleteCreature (idInput) {
    try {
        const deleteCreature = await db.creature.destroy({
            where: {
                id: idInput
            }
        })
        console.log(deleteCreature)        
    } catch (err) {
        console.log(err)
    }
}

// deleteCreature('2')
