const db = require('./models')

const dinoCRUD = async () => {
    try{
    // C
        const newDino = await db.dino.create({
            name: 'Saw-Disk',
            type: 'Stegosaurus'
        })
    // R
    // U
    // D
    } catch(err) {
        console.warn(err)
    }
}

dinoCRUD()