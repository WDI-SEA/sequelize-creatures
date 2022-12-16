const db = require('./models')

async function createDino(n,t) {
  try {
    const newDino = await db.dino.create({
      name: n,
      type: t
    })
    console.log(newDino)
  } catch (err) {
    console.log(err)
  }
}

// createDino('Duckie', 'Duck?')
// createDino('Littlefoot', 'T-rex')
// createDino('Cera', 'Annoying')

async function readDino() {
  try {
    const allDinos = await db.dino.findAll({
      where: {
        name: 'Duckie'
      }
    })
    console.log(allDinos)
  } catch (error) {
    console.log(error)
  }
}

// readDino()

async function updateDino() {
  try {
    const numRowsChanged = await db.dino.update(
      { type: 'Giga T-rex' },
      {
        where: {
          name: 'Littlefoot'
        }
      }
    )
    console.log(numRowsChanged)
  } catch (error) {
    console.log(error)
  }
}

// updateDino()

async function destroyDino() {
  try {
    const numRowsDeleted = await db.dino.destroy({
      where: {
        name: 'Cera'
      }
    })
    console.log(numRowsDeleted)
  } catch (error) {
    console.log(error)
  }
}

// destroyDino()

async function createCreature(i,t) {
  try {
    const newCreature = await db.creature.create({
      img_url: i,
      type: t
    })
    console.log(newCreature)
  } catch (err) {
    console.log(err)
  }
}

// createCreature('/img/ultrashark.png', 'Megalodon')
// createCreature('/img/omegaderp.png', 'Sloth')
// createCreature('/img/lesscoolmegalodon.png', 'Shark')

async function readCreature() {
  try {
    const allCreatures = await db.creature.findAll({
      where: {
        type: 'Megalodon'
      }
    })
    console.log(allCreatures)
  } catch (error) {
    console.log(error)
  }
}

// readCreature()

async function updateCreature() {
  try {
    const numRowsChanged = await db.creature.update(
      { type: 'Apex Predator Sloth' },
      {
        where: {
          img_url: '/img/omegaderp.png'
        }
      }
    )
    console.log(numRowsChanged)
  } catch (error) {
    console.log(error)
  }
}

// updateCreature()

async function destroyCreature() {
  try {
    const numRowsDeleted = await db.creature.destroy({
      where: {
        type: 'Shark'
      }
    })
    console.log(numRowsDeleted)
  } catch (error) {
    console.log(error)
  }
}

// destroyCreature()
