// import the models folder
const db = require ('./models')

const crud = async () => {
  try {
    // CREATE
    const newDino = await db.dino.create({
      name: 'Mt. T Rex',
      type: 'A-team dino'
    })

    const newCreature = await db.creature.create({
      type:'squirral',
      img_url: ' squirrel.com'
    })
    // READ
    const dinos = await db.dino.findAll()
    const creatures = await db.creature.findAll()
    console.log(dinos, creatures)
    // UPDATE
    await db.create.update({
      img_url:'https://www.gannett-cdn.com/presto/2021/11/01/NCOD/1bab0f3b-e3ff-4457-bd20-2b668627be20-A_red_squirrel_de-husks_a_walnut_in_the_writers_backyard._Jim_McCormac.jpg?width=1320&height=1260&fit=crop&format=pjpg&auto=webp',
      type: 'chonky squirrel'
    }, {
      where: {
        type: 'squirrel'
      }
    })

    await db.dino.update({
      name:'blue',
      type: 'velociraptor, parvez belives'
    }, {
      where: {
        id:1
      }
    })
    // DESTROY

    await db.dino.destroy({
      where: {
        id:1
      }
    })
    await db.creature.destroy({
      where: {
        id:1
      }
    })

  } catch (err) {
  console.log(err)
  }
}


crud()