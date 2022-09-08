const db = require('./models')

const dinoCRUD = async () => {
    try{
        // Create
        const newDino = await db.dino.create({
            name: "BrazySaurus",
            type: 'big Dino'
            // id: 21 forgot to put id in database, but it would go here and same for creatures
        })
        // Read
        const allDinos = await db.dino.findall()
        // Update
        const rowsChanged = await db.dino.update({type: 'big Dino'}, {
            where:{
                name: 'BrazySaurus'
            }
        })
        // destroy
        const destroyThatDino = await db.dino.destroy({
            where:{
                name: 'BrazySaurus'
            }
        })
    }catch(err){
        console.warn(err)
    }
}
const creatureCRUD = async () => {
    try{
        // Create
        const newCreep = await db.creature.create({
            name: "THE ELASTIC BULL WORM",
            img_url: 'www.google.com/someimg'
            // id: 21 forgot to put id in database
        })
        // Read
        const allCreeps = await db.creature.findall()
        // Update
        const rowsChanged = await db.creature.update({img_url: 'www.google.com/someimg'}, {
            where:{
                name: 'THE ELASTIC BULL WORM'
            }
        })
        // destroy
        const destroyThatCreep = await db.creature.destroy({
            where:{
                name: 'THE ELASTIC BULL WORM'
            }
        })
    }catch(err){
        console.warn(err)
    }
}

dinoCRUD()
creatureCRUD()
