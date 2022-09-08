const db = require('./models')

//db.dino.sequelizeMethod()
const dinoCRUD = async () => {
    try {
        // CREATE
        // const newDino = await db.dino.create({
        //     name: 'Brandy',
        //     type: 'Brachiosaurus'
        // }) 
        // console.log(newDino)

        // //READ
        // const someDinos = await db.dino.findAll({
        //     where: {
        //         //can search for any field from the model
        //         type: 'Velociraptor'
        //     }
        // })
        // console.log(someDinos)
        //UPDATE
        // updates return the number of rows that were changed
        // db.model.update({what to change}, {where: {where clause}})
        // const nameChange = await db.dino.update({ name: 'Mark'}, {
        //     where: {
        //         type: 'Velociraptor'
        //     }
        // })
        // console.log(nameChange)
        //DESTROY
        // const numRowsDeleted = await db.user.destroy({
        //     where: {
        //         firstName: 'Weston'
        //     }
        // })
        // console.log(numRowsDeleted)
    } catch(err) {
        console.warn(err)
    }
}
//dont forget to invoke
dinoCRUD()