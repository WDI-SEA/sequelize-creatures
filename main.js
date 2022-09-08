const db = require('./models')

const dinoCRUD = async ()=>{
    try{
        //Create
        // const newDino = await db.dino.create({
        //     name: 'Rawr Boi',
        //     type: 'Trex'
        // })
        // console.log(newDino)
        //Read
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)
        // const someDinos = await db.dino.findAll({
        //     where: {
        //         name: 'Rawr Boi'
        //     }
        // })
        // console.log(someDinos)
        // const [dino, created] = await db.dino.findOrCreate({
        //     where: {
        //         type: 'Tryceratops'
        //     },
        //     defaults: {
        //         name: 'Secret Dino'
        //     }
        // })
        // console.log(dino)
        //Update
        // const numRowsUpdated = await db.dino.update({name: 'Truly a Dragon'}, {where:{type:'Trex'}})
        // console.log(numRowsUpdated)
        //Destroy
        // const numRowsDestroyed = await db.dino.destroy({
        //     where: {
        //         name: 'Secret Dino'
        //     }
        // })
        // console.log(numRowsDestroyed)

    } catch(err){
        console.warn(err)
    }
}

// dinoCrud()

const creatureCRUD = async ()=> {
    try{
        //Create
        // const newCreature = await db.creature.create({
        //         type: 'Sabor-Toothed Salmon',
        //         img_url: 'https://cottagelife.com/wp-content/uploads/2014/11/Oncorhynchus_rastrosus.jpg'
        // })
        // console.log(newCreature)
        //Read
        // const allCreatures = await db.creature.findAll({})
        // console.log(allCreatures)
        //Update
        // const rowsUpdated = await db.creature.update({type: 'Sabor-Toof Salmon'}, {where: {type:'Sabor-Toothed Salmon'}})
        //Destroy
        // const rowsDestroyed = await db.creature.destroy({
        //     where: {
        //         id: 2
        //     }
        // })

    } catch(err){
        console.warn(err)
    }

}
// creatureCRUD()