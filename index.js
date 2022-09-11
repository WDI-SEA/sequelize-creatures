const db = require('./models')

const dinoCRUD = async () => {
  try {
    // CREATE
    const newDino = await db.dino.create({
      name: 'Jargon',
      type: 'Jargasaurus'
    })

    // READ
    const allDinos = await db.dino.findAll()

    // UPDATE
    const numRowsChanged = await db.dino.update({ type: 'Jargosaurus' }, {
      where: {
        name: 'Jargon'
      }
    })

    // DESTROY
    const numRowsDeleted = await db.dino.destroy({
      where: {
        name: 'Jargon'
      }
    })

  } catch(err) {
    console.warn(err)
  }
}

const creatureCRUD = async () => {
  try {
    // CREATE
    const newCreature = await db.creature.create({
      name: 'Jargon',
      type: 'Jarganoplis'
    })

    // READ
    const allCreatures = await db.creature.findAll()

    // UPDATE
    const numRowsChanged = await db.creature.update({
      type: 'Jargonoplis' 
    }, 
    {
      where: {
        name: 'Jargon'
      }
    })

    // DESTROY
    const numRowsDeleted = await db.creature.destroy({
      where: {
        name: 'Jargon'
      }
    })

  } catch(err) {
    console.warn(err)
  }
}

// Invoke functions
dinoCRUD()
creatureCRUD()