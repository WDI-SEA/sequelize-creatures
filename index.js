const db = require('./models')

const dinosCRUD = async () => {
    try {
        const newDino = await db.dinos.create({
            name: "Rex",
            type:"TRex"
        })

        const [dino, created] = await db.dinos.findOrCreate({
            where: {
                name: "Sally"
            },
            defaults: {
                type: "Sabertoothasaurous"
            }
        })

        const findAll = await db.dinos.findAll()
        console.log(findAll)

        const findOne = await db.dinos.findOne({
            where: {
                name: "Sally"
            }
        })

        const numRowsUpdated = await db.dinos.update({
            type: "TRex"}, {
            where: {
                name: "Sally"
            }
        })

        const numRowsDeleted = await db.dinos.destroy({
            where: {
                name: "Sally"
            }
        })
    } catch (err) {
        console.warn(err)
    } finally {
        console.log('done with dinos')
    }
}

dinosCRUD()

const creatureCrud = async () => {
    try {
        const newCreature = await db.creature.create({
            type: "Biggie",
            img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCyIxqaAROWa4K0Nfe_sLSRmdslyoSttaTQ&usqp=CAU"
        })

        const [creature, created] = await db.creature.findOrCreate({
            where: {
                type: "Larry"
            },
            defaults: {
                img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl-nZSuzQ7ml3EwsNGZuhceQwP1bstkMY7Q&usqp=CAU"
            }
        })

        const findAll = await db.creature.findAll()
        console.log(findAll)

        const findOne = await db.creature.findOne({
            where: {
                type: "Larry"
            }
        })

        const numRowsUpdated = await db.creature.update({
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6etrafSWO_tPwBoBhE49sT0aVr6OovTqBA&usqp=CAU"}, {
            where: {
                type: "Larry"
            }
        })

        const numRowsDeleted = await db.creature.destroy({
            where: {
                type: "Larry"
            }
        })
    } catch (err) {
        console.warn(err)
    } finally {
        console.log('cease with creatures')
    }
}

creatureCrud()