const db = require('./models')

async function createCreature() {
    try {
const newCreature = await db.creature.create({
    name: 'Papi',
    type: 'Aligator',
},
{
    name: 'Tim',
    type: 'Triceratops'
})

console.log(newCreature)

    } catch (err) {
        console.log(err)
    }
}
//createCreature()

// async function createDino() {
//     try {
//         // let newDino = await db.dinosaur.create({
//         //     name: 'Junior',
//         //     type: 'Testasaur',
//         // })
//         // newDino = await db.dinosaur.create({
//         //     name: 'Huble',
//         //     type: 'Tesasaur'
//         // })
//         const allDinos = await db.dinosaur.findAll()
//         console.log(allDinos);

//     } catch (err) {
//         console.log(err)
//     }
// }
// createDino()

// async function findSpecificDino() {
//     try {
//         const allDinos = await db.dinosaur.findAll({
//             where: {
//                 name: 'Junior'
//             }
//         })
//         console.log(allDinos)
//     } catch (err) {
//         console.log(err)
//     }
// }
// findSpecificDino()

// async function updateDino() {
//     try {
//         const update= db.dinosaur.update({
//             type: 'Taco-taurus'
//         }, {
//         where: {
//             name: 'Happi'
//         }
//         })
//         console.log(update)
//     } catch (err) {
//         console.log(err)
//     }
// }
// updateDino()

// async function destroyDino() {
//     try {
//         const deletedRows = await db.dinosaur.destroy({
//             where: {name: 'Happi'}
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// destroyDino()
// async function findOrCreateDino(){
//     try{
//         const [dinosaur, create] = await db.dinosaur.findOrCreate({
//             where: {
//                 name: 'Happy Cat',
//             },
//             defaults: {type: 'T-rex'}
//         })
//         console.log(`${dinosaur.name} was ${created ? 'created' : 'found'}`)
//     } catch (err) {
//         console.log(err)
//     }
// }
// findOrCreateDino()
// async function findOrCreateDino(){
//     try{
//         const [dinosaur, create] = await db.dinosaur.findOrCreate({
//             where: {
//                 name: 'Kevin',
//             },
//             defaults: {type: 'T-rex'}
//         })
//         console.log(`${dinosaur.name} was ${created ? 'created' : 'found'}`)
//     } catch (err) {
//         console.log(err)
//     }
// }
// findOrCreateDino()

// async function createCreature() {
//     try{
//         const creatureCreate = await db.creature.create({
//             name: 'Roach',
//             type: 'Insect'
//         },{name: 'Nat',type:'insect'})
//         console.log(creatureCreate)
//     } catch(err) {
//         console.log(err)
//     }
// }
// createCreature()


async function findCreature() {
    try{
        const findCreature = await db.creature.findAll()
        findCreature.forEach(creature => {
            console.log(creature.type)
        })
    } catch (err) {
        console.log(err)
    }
}
findCreature()

// async function updateCreature() {
//     try {
//         const update= db.creature.update({
//             type: 'Lepidoptera'
//         }, {
//         where: {
//             name: 'butterfly'
//         }
//         })
//         console.log(update)
//     } catch (err) {
//         console.log(err)
//     }
// }
// updateCreature()

// async function destroyCreature() {
//     try {
//         // const deletedRows = await db.creature.destroy({
//         //     where: {name: 'Lizard'}
//         // })
//         creature.forEach(creature => {
//             console.log(creature.name)
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// destroyCreature()