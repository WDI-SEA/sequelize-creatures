const db = require('./models')

const dinoCRUD = async () => {
    try{
    // C
        // const newDino = await db.dino.create({
        //     name: 'Birdy',
        //     type: 'Pterodactyl'
        // })
        // console.log(newDino)
    // R
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)
        const someDinos = await db.dino.findAll({
            where: {
                name: 'T-Rex'
            }
        })
        console.log(someDinos)
    // U
    // D
    } catch(err) {
        console.warn(err)
    }
}

dinoCRUD()