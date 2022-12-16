
const db = require('./models')

//========CREATE 
// db.dino.create({
//     name: '',
//     type: 'Cedarpelta'
// }).then(createdUser=>{
//     // the create promise returns the
//     // new row of data that has been created
//     // (otherwise it throws an error)
//     console.log(createdUser)
//     // terminates the node process at this point so that we don't have to force-quit
//     process.exit()
// })

// db.creatures.create({
//     img_url: 'https://www.fieldmuseum.org/sites/default/files/styles/3x2_820w/public/thylacosmilus.png?itok=qJhxW1OG',
//     type: 'Thylacosmilus'
// }).then(createdUser=>{
//     // the create promise returns the
//     // new row of data that has been created
//     // (otherwise it throws an error)
//     console.log(createdUser)
//     // terminates the node process at this point so that we don't have to force-quit
//     process.exit()
// })

//========READ
// db.dino.findOne({
//     where: {name: 'Catt'}
// }).then(foundUser=>{
//     console.log(foundUser)
//     process.exit()
// })

// db.creatures.findOne({
//     where: {type: 'Catt'}
// }).then(foundUser=>{
//     console.log(foundUser)
//     process.exit()
// })

//========CREATE OR FIND
// db.dino.findOrCreate({
//     where: {
//       name: 'Rory',
//       type: 'Talarurus'
//     }
//     // defaults: {  }
//   }).then(([user, wasCreated])=>{
//     console.log(user); // returns info about the user
//     process.exit()
//   });

//========UPDATE
// db.dino.update({
//     type: 'Trex'
//   }, {
//     where: {
//       name: 'Catt'
//     }
// }).then(numRowsChanged=>{
//     // Returns a value of how many rows were altered by this update
//     console.log(numRowsChanged)
//     process.exit()
// });

// db.creatures.update({
//     type: 'Milo'
//   }, {
//     where: {
//       img_url: 'https://www.fieldmuseum.org/sites/default/files/styles/3x2_820w/public/thylacosmilus.png?itok=qJhxW1OG'
//     }
// }).then(numRowsChanged=>{
//     // Returns a value of how many rows were altered by this update
//     console.log(numRowsChanged)
//     process.exit()
// });


//========DESTROY
// db.dino.destroy({
//     where: { name: 'Rory' }
//   }).then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//     // do something when done deleting
//       process.exit()
//   });