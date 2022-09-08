const db = require('./models')

// DINOS

// CREATE
// async function createDino() {
//     try {
//         const newDino = await db.dino.create({
//             name: 'Barney',
//             type: 'big purple dinosaur'
//         })
//         console.log(newDino)
//     } catch(err) {
//         console.warn(err)
//     }
// }

// createDino()

// READ
// async function readOneDino() {
//     try {
//         const foundDino = await db.dino.findOne({
//             where:{
//                 name: 'Barney'
//             }
//         })
//         console.log(foundDino)
//     } catch(error) {
//         console.warn(error)
//     }
// }

// readOneDino()

// UPDATE
// async function updateDino() {
//     try {
//         const numRowsChanged = await db.dino.update({type: 'big purple dinosaur that loves you'}, {
//             where: {
//                 name: 'Barney'
//             }
//         })
//         console.log(numRowsChanged)
//     } catch(err) {
//         console.warn(err)
//     }
// }

// updateDino()

// DESTROY
// async function destroyDino() {
//     try {
//         const numRowsDeleted = await db.dino.destroy({
//             where: {
//                 name: 'Littlefoot'
//             }
//         })
//         console.log(numRowsDeleted)
//     } catch(error) {
//         console.warn(error)
//     }
// }

// destroyDino()

// CREATURES
// CREATE

// READ

// UPDATE

// DESTROY