const db = require('./models')

const dinoCRUD = async () => {
    try {
        //CREATE
        const newDino = await db.dino.create({
            name: 'Rex',
            type: 'T-Rex'
        })
        console.log(newDino)

        //READ
        const allDinos = await db.dino.findAll() 

        //UPDATE
        const dinoEdit = await db.dino.update({ type: "Stego"}, {
            where: {
                name: 'Stego'
            }
        })
        console.log(dinoEdit)

        //DESTROY
        const destroyDino = await db.dino.destroy({
            where: {
                name: 'Stego'
            }
        })
        console.log(destroyDino)
    } catch(err) {
        console.warn(err)
    }
}
dinoCRUD()

const creatureCRUD = async () => {
    try {
        //CREATE
        const newCreature = await db.creature.create({
            img_url: 'https://i.imgur.com/OgeGHdf.jpg',
            type: 'big foot'
        })
        console.log(newCreature)

        //READ
        const allCreatures = await db.creature.findAll() 

        //UPDATE
        const creatureEdit = await db.creature.update({ img_url: "https://i.imgur.com/5m9ywsr.jpg"}, {
            where: {
                type: 'small foot'
            }
        })
        console.log(creatureEdit)

        //DESTROY
        const destroyCreature = await db.creature.destroy({
            where: {
                type: 'small foot'
            }
        })
        console.log(destroyCreature)
    } catch(err) {
        console.warn(err)
    }
}
creatureCRUD()