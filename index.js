const db = require('./models')

const userCRUD = async () => {

// CREATE
// const newDino = await db.dino.create({
//     name: 'Yomamma',
//     type: 'T-rex'
// })

// const newCreature = await db.creature.create({
//     img_url: 'https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg?w=584&h=325',
//     type: 'Megalonyx'
// })
// READ
    // const allDinos = await db.dino.findAll({
    //     where: {
    //         name: 'Little Foot'
    //     }
    // })
    // const allCreatures = await db.creature.findAll()
    // console.log(allDinos, allCreatures)

// UPDATE
// const numRowsChanged = await db.dino.update({name: 'Big Foot'}, {
//     where: {
//         name: 'Little Foot'
//     }
// })
// console.log(numRowsChanged)

// DELETE
const numRowsDeleted = await db.dino.destroy({
    where: {
        name: 'Yomamma'
    }
})
console.log(numRowsDeleted)




}
userCRUD()