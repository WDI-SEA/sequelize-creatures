const db = require('./models')

db.dinoModel.create({
    id: 1,
    name:"barney",
    type: "friendly"
}).then(createdDino=>{
    console.log(createdDino)
    process.exit()
})

db.dinoModel.findOne({
    where:{id :1}
}).then(foundUser=>{
    console.log(foundUser)
    process.exit()
})

db.dinoModel.findOrCreate({
    where:{
        id:1
    },
    defaults:{type: "Purple Cartoon"}
}).then(([user,wasCreated])=>{
    console.log(user)
    process.exit()
})
db.dinoModel.destroy({
    where: { name: 'barney' }
  }).then(dinoDeleted=>{
      console.log(dinoDeleted)
    // do something when done deleting
      process.exit()
  });


  db.creatureModel.create({
    id: 1,
    name:"bingo",
    type: "dog"
}).then(createdcreature=>{
    console.log(createdcreature)
    process.exit()
})

db.creatureModel.findOne({
    where:{id :1}
}).then(foundUser=>{
    console.log(foundUser)
    process.exit()
})

db.creatureModel.findOrCreate({
    where:{
        id:1
    },
    defaults:{type: "My dog"}
}).then(([user,wasCreated])=>{
    console.log(user)
    process.exit()
})
db.creatureModel.destroy({
    where: { name: 'bingo' }
  }).then(creatureDeleted=>{
      console.log(creatureDeleted)
    // do something when done deleting
      process.exit()
  });