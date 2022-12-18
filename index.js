//import entire models it on db

const db = require('./models')


// CREATE

// const create = async () => {
//     const newDino = await db.dinop2.create ({
//     dinoName: 'Rexy',
//     Dinotype: 'Trex'
//   })
//   console.log(newDino)
  
//  const newCreature = await db.creaturep2.create ({
//      img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andrewsarchus_DB.jpg/512px-Andrewsarchus_DB.jpg',
//       creatureType: 'Smilodon'
//     })
//     console.log(newCreature)
// }
// create()


    //READ
const read = async () => {
    const foundDino = await db.dinop2.findOne ({
        where: {
            dinoName: 'Rexy'
        }
     })     
      console.log(foundDino)
      
     const foundCreature = await db.creaturep2.findOne ({
        where: {
            creatureType: 'Smilodon'
        }
     })     
      console.log(foundCreature)
}
read()


//UPDATE
    const update = async() => {
        const updateDino = await db.dinop2.update
        ({dinoName:'Bruce',dinoType:'Megalodon'}, {
        where: {
            dinoName:'Rexy'
            }
        })
        console.log(updateDino)

        const updateCreature = await db.creaturep2.update
        ({creatureType:'Triceratops'}, {
        where: {
            creatureType:'Smilodon'
            }
        })
        console.log(updateCreature)
    }
   update()


//DESTROY

const destroy = async() => {
    const destroyDino = await db.dinop2.destroy({
        where: {
            id: 1
        }
    })
    console.log(destroyDino)

    const destroyCreature = await db.creaturep2.destroy({
        where: {
            id: 1
        }
    })
    console.log(destroyCreature)
}
destroy()


