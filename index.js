const db = require('./models')
async function creaturesCrud(){
    try{
        //CREATE new dino
        // const newDino = await db.dino.create({
        //     name: 'Fred',
        //     type: 'pterodactyl'
        // })

        //CREATE new creature
        // const newCreature = await db.creature.create({
        //     img_url: 'https://www.thesprucecrafts.com/thmb/gsOrhApJV_cpR…ipartlibrary-40d5879ae1fd481fb1dd69a2acd87ecb.jpg',
        //     type: 'turkey'
        // })

        //READ dino
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)

        //READ creature
        // const allCreatures = await db.creature.findAll()
        // console.log(allCreatures)

        //UPDATE dino
        // const updateDino = await db.dino.update({name: 'Jerry'},{
        //     where:{
        //         name: 'Fred'
        //     }
        // })

        //UPDATE creature
        const updateCreature = await db.creature.update({
            img_url: 'https://images.hdqwalls.com/wallpapers/bthumb/super-jerry-qy.jpg',
            type: 'Super Jerry'
        },
        {
            where:{
                type: 'turkey'
            }
        })
        //DELETE dino
        // const deleteDino = await db.dino.destroy({
        //     where:{
        //         name: 'Fred'
        //     }
        // })

        //DELETE creature
        // const deleteCreature = await db.creature.destroy({
        //     where:{
        //         type: 'turkey'
        //     }
        // })

        // console.log(deleteDino)
    } catch (err){
        console.log(err)
    }

}
creaturesCrud()