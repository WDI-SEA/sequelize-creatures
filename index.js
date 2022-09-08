const db = require('./models')

const dinoCrud = async () =>{
    try {
        //CREATE
        // const newDino = await db.dino.create({
        //     name: 'Hammer',
        //     type: 'T-rex'
        // })
        // const newDino = await db.dino.create({
        //     name: 'Fritz',
        //     type: 'weeniesaurus'
        // })
        //READ
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)

        // const oneDino = await db.dino.findAll({
        //     where: {
        //         type: 'T-rex'
        //     }
        // })
        // console.log(oneDino)
        //UPDATE
        // const updateRex = await db.dino.update({name: 'Sharky'},{
        //     where: {
        //         createdAt: '2022-09-07 20:12:43.699-07'
        //     }
        // })
        // console.log(updateRex)
        //DELETE
        // const deletasaurus = await db.dino.destroy({
        //     where: {
        //         name: "Hammer"
        //     }
        // })
        // console.log(deletasaurus)
    } catch (error) {
        console.warn(error)
    }
}

dinoCrud()


const creatureCrud = async () =>{
    try {
        //CREATE
        // const addCreature = await db.creature.create({
        //     type: 'wiener',
        //     img_url: 'http://www.placecorgi.com/300/200'
        // })
        // const newCreature = await db.creature.create({
        //     type: 'sabertooth',
        //     img_url: 'http://www.placekitten.com/300/200'
        // })
        //READ
        // const seeAllCreatures = await db.creature.findAll()
        // console.log(seeAllCreatures)
        // const seeOneCreature = await db.creature.findAll({
        //     where: {
        //         type: 'sabertooth'
        //     }
        // })
        // console.log(seeOneCreature)
        //UPDATE
        // const updateCreature = await db.creature.update({ type: "Dachschund" },{
        //     where: {
        //         type: 'wiener'
        //     }
        // })
        // console.log(updateCreature)
        //DESTROY
        // const destroyCreature = await db.creature.destroy({
        //     where: {
        //         type: 'sabertooth'
        //     }
        // })
        // console.log(destroyCreature)
    } catch (error) {
        console.warn(error)
    }

}
creatureCrud()