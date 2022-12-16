const db = require('./models')

async function userCrud(){
    try{
      //  CREATE DINO

        // const newDino = await db.dino.create({
        //     name: 'Spin',
        //     type: 'Spinosaurus'
        // })

        // console.log(`new dino name: ${newDino.name} , type: ${newDino.type}`)

        // const newDino = await db.dino.create({
        //     name: 'T.rex',
        //     type: 'Tyrannosaurus rex'
        // })

        // console.log(`new dino name: ${newDino.name} , type: ${newDino.type}`)
        
        // CREATE CREATURE
        // const newCreature = await db.creature.create({
        //     type: 'saber-toothed salmon',
        //     img_url: 'https://cottagelife.com/wp-content/uploads/2014/11/Oncorhynchus_rastrosus.jpg'
        // })

        // console.log(`new creature type: ${newCreature.type} , img_url: ${newCreature.img_url}`)

        //  const newCreature = await db.creature.create({
        //     type: 'megalonyx',
        //     img_url: 'https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg'
        // })

        // console.log(`new creature type: ${newCreature.type} , img_url: ${newCreature.img_url}`)



        //READ DINOS
        // const allDinos = await db.dino.findAll() 
        // allDinos.forEach(dino => console.log(dino.name))
        
        //READ CREATURES
        // const allCreatures = await db.creature.findAll() 
        // allCreatures.forEach(creature => console.log(creature.type))


        //UPDATE DINO
        // const numRowsChange = await db.dino.update({name: 'tyrex'}, {
        //     where: {
        //         type: 'Tyrannosaurus rex'
        //     }
        // })
        // console.log(numRowsChange)
        
        //UPDATE CREATURES
        // const numRowsChange = await db.creature.update({img_url: 'https://static.scientificamerican.com/blogs/cache/file/804CDB05-A681-422F-A3112D2CA704E6E2_source.jpg?w=590&h=800&1D512979-5FED-4A9A-A63477A9B36232B9'}, {
        //     where: {
        //         type: 'saber-toothed salmon'
        //     }
        // })
        // console.log(numRowsChange)



        //DESTROY DINO
        // const numRowDeleted = await db.dino.destroy({
        //     where: {
        //         name: 'Spin'
        //     }
        // })
        // console.log(numRowDeleted)

        //DESTROY CREATURE
        // const numRowDeleted = await db.creature.destroy({
        //     where: {
        //         type: 'saber-toothed salmon'
        //     }
        // })
        // console.log(numRowDeleted)

     } catch(err){
        console.log(err)
     }

}

userCrud()