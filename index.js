const db = require('./models')


const dinoCrud = async () => {
    try {
        // CREATE
        // const newDino = await db.dino.create({
        //     name: 'tiny',
        //     type: 't-rex'
        // })

        // READ
        // const errbody = await db.dino.findAll()
        // errbody.forEach(dino => {
        //     console.log(dino.name, ":",dino.type)
        // })

        // UPDATE
        // const updateType = await db.dino.update({ type: 'stegasaurus' }, {
        //     where: {
        //         id: 1
        //     }
        //  })

        // DELETE
        // const deleteDino = await db.dino.destroy({
        //     where: {
        //         name: 'tiny'
        //     }
        // })

    } catch(err) {
        console.log(err)
    }
}


const creatureCrud = async () => {
    try {
        // CREATE 
        // const newCreature = await db.creature.create ({
        //     type: 'megalonyx',
        //     img_url: 'google.com'
        // })

        // READ
        // const findPK = await db.creature.findByPk(1)
        // console.log(findPK)   

        // UPDATE
        // const updateImg = await db.creature.update({ img_url: 'https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg?w=584&h=325' }, {
        //     where: {
        //         type: 'megalonyx'
        //     }
        // })

        // DELETE
        // const deleteCreature = await db.creature.destroy({
        //     where: {
        //         id: 1
        //     }
        // })
        
    } catch(err) {
        console.log(err)
    }
}

// dinoCrud()
creatureCrud()