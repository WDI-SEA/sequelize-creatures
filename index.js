const db = require('./models')

db.dinos.create({
    name: 'flexasaurus-rex',
    type: "hot-yoga"
})

db.creatures.create({
    img_url: "https://freedesignfile.com/upload/2021/08/Animal-cartoon-playing-basketball-vector.jpg",
    type: "athlete"
})


db.dinos.findOne({
    where: {name: 'flexasaurus'}
}).then(foundDino => {
    console.log(foundDino)
})

db.creatures.findOne({
    where: {id: 1}
}).then(foundDino => {
    console.log(foundDino)
})

db.dinos.update({
    name: "flexasaurus-max"
  }, {
    where: {
      type: 'yoga'
    }
  })

  db.creatures.update({
    type: "Sporty"
  }, {
    where: {
      id: 1
    }
  }) 

db.dinos.destroy({
    where: { id: 1}
})

db.creatures.destroy({
    where: { id: 1}
})