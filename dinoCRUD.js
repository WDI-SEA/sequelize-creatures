const db = require('./models');

async function createDino(obj) {
    try {
        const newDino = await db.dino.create(obj)
    } catch (err) {
        console.log(err)
    }
}
// createDino({
//     "name":"Littlefoot",
//     "type":"apatosaurus"
//   });
//   createDino({
//     "name":"Cera",
//     "type":"triceratops"
//   });
//   createDino({
//     "name":"Ducky",
//     "type":"saurolophus"
//   });
//   createDino({
//     "name":"Petrie",
//     "type":"pteranodon"
//   });
//   createDino({
//     "name":"Spike",
//     "type":"stegosaurus"
//   });
async function readAllDino() {
    try {
        const allDino = await db.dino.findAll()
        console.log(allDino)
    } catch (err) {
        console.log(err)
    }
}
readAllDino();

async function updateDino() {
    try {
        const numRowChanged = await db.dino.update({type: 'apatosaurus'}, {
            where: {
                name: 'Littlefoot'
            }
        })
        console.log(numRowChanged)
    } catch (err) {
        console.log(err)
    }
}
updateDino()

async function destroyDino() {
    try {
        const numRowDeleted = await db.dino.destroy({
            where: {
                name: 'Littlefoot'
            }
        })
        console.log(numRowDeleted)
    } catch (err) {
        console.log(err)
    }
}
destroyDino()