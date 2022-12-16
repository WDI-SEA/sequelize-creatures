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

      const oneCreature = await db. creature.findone({
        where:{
            type: 'dino-two'
        }
     })
      //console.log('oneCreature')

      const newDino = await db. dino.findone({
        where:{
            name: 'nimo'
        }
     })
      //console.log('newDino')


      ///update

      const numDinosChanged = await db.dino.update({name: 'dinno' }, {
        where: {
          name: 'nimo'
        }
      })

      //console.log(numDinosChanged)

      const numCreaturesChanged = await db.creature.update({type: 'dino-three' }, {
        where: {
          type: 'dino-two'
        }
      })

      //console.log(numCreaturesChanged)

      ///delete
      const numDinosDeleted = await db.dino.destroy({
        where: { 
          name: 'nimo' 
        }
      })
      //console.log(numDinosDeleted)

      const numCreaturesDeleted = await db.creature.destroy({
        where: { 
          type: 'dino-two' 
        }
      })
      //console.log(numCreaturesDeleted)
      

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

