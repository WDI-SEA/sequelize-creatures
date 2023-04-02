const db = require("./models");

const crud = async () => {
    try {
    // CREATE
        // const newDino = await db.dino.create({
        //     name: "TRex",
        //     type: "Tyrannosaurus rex"
        // })
        
        // const newCreature = await db.creature.create({
        //     img_url: "https://www.datocms-assets.com/44232/1640824063-thylacosmilus.png?fm=webp",
        //     type: "Thylacosmilusss",
        // })
        // console.log(newDino);
        // console.log(newCreature);
    
        // READ
            // const allDinos = await db.dino.findAll();
            // allDinos.forEach(dino => {
            //     console.log(dino.name);
            // })

            // const allCreatures = await db.creature.findAll();
            // allCreatures.forEach(creature => {
            //     console.log(creature.type)
            // })

        // UPDATE 
            // const dinoNameChange = await db.dino.update({name: "T-Rex"}, {
            //     where: {
            //         name: "TRex"
            //     }
            // })
            // const creatureNameChange = await db.creature.update({type: "Thylacosmilus"}, {
            //     where: {
            //         type: "Thylacosmilusss"
            //     }
            // })
        // DESTROY
            // const destroyDino = await db.dino.destroy({
            //     where: {
            //         name: "T-Rex"
            //     }
            // })
            // const destroyCreature = await db.creature.destroy({
            //     where: {
            //         type: "Thylacosmilus"
            //     }
            // })



    } catch(err) {
        console.log(err)
    }
}

crud()