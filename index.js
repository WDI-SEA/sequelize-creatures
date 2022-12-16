const { where } = require('sequelize')
const db = require('./models')
async function createDino() {
    try {
      // the create promise returns the
      // new row of data that has been created
      // (otherwise it throws an error)
      const newDino = await db.dino.create({
          name: 'nimo',
          type: 'dono-one',
          
      })
      
      const newCreature = await db.creature.create({
        img_url: 'https://s.abcnews.com/images/US/new-dinosaur-02-ht-jef-210811_1628710886267_hpEmbed_17x12_992.jpg',
        type: 'dino-two',
      })
      const oneCreatures = await db. creature.findone({
        where:{
            type: 'dino-two'
        }
     })
      console.log('oneCreatures')

      ///update

      const numRowsChanged = await db.user.update({ lastName: 'Taco' }, {
        where: {
          firstName: 'Brian'
        }
      })
      console.log(numRowsChanged)
      ///delete
      const numRowsDeleted = await db.user.destroy({
        where: { 
          firstName: 'Brian' 
        }
      })
      console.log(numRowsDeleted)
      //console.log(newDino)
      //} catch (err) {
     // console.log(err)
    
 
      // the create promise returns the
      // new row of data that has been created
      // (otherwise it throws an error)
      
    
          
      //const newCreature = await db.creature.findAll()
      //where: {
          //type:"dino-two"
      //}
    } catch (err) {
        // console.log(err) 

    }
}


createCreature()  
createDino()
destroyUser()
updateUser()

