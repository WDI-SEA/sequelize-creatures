const db = require('./models')

const create = async () => {
    try {
        await db.dino.create({
            name: 'yoshi',
            name: 'green dino'
        })
        await db.creature.create({
            img_url: 'https://i.pinimg.com/originals/30/97/11/3097117bfb71d8e5899a36865ddc995f.png',
            type: 'male bull woolly mammoth'
        })
    } catch (err) {
        console.log(err)
    }
}
// create()

const read = async () => {
    try {
       const dino = await db.dino.findOne({
            where: {
                name: 'yoshi'
            }
        })
      const creature = await db.creature.findByPk(2)
        console.log(dino, creature)    
    } catch (err) {
        console.log(err)
    }
}
// read()

const upDate = async () => {
    try {
       const dino =  await db.dino.update({ name: 'Barney boy' }, {
           where: {
                 id: 1
                 }
        })

       const creature = await db.creature.update({ type:'Super Hecking Choncker' }, {
            where: {
                type: 'Heckin Chonker'
            }
       })
     console.log(dino, creature)    
     } catch (err) {
         console.log(err)
     }
 }
// upDate()

const destroy = async () => {
    try {
        const dino = await db.dino.destroy({
            where: {
                id: 3
            }
        })
        const creatures = await db.creature.destroy({
            where: {
              id: 3  
            }
        })
        console.log(dino, creature)  
    } catch (err) {
        console.log(err)
    }
}
destroy()