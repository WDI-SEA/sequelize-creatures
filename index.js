const creatures = require('./models')
// const { Sequelize } = require("sequelize");

// // https://sequelize.org/docs/v6/getting-started/
// const sequelize = new Sequelize("database", "username", "password", {
//   host: "localhost",
//   dialect: "postgres",
// });

// // https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine
// // https://sequelize.org/docs/v7/other-topics/other-data-types/


// const Dino = sequelize.define("dino", {
//   // Model attributes are defined here
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: Sequelize.TEXT,
//   type: Sequelize.TEXT,
// });


// CREATE a dino
Dino.create({
    name: "T-Rex",
    type: "Killer dinosaur",
  })
    .then((dino) => {
      console.log(dino);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // READ a dinos
  Dino.findOne({
    where: { name: "T-Rex" },
  }).then((foundUser) => {
    console.log(foundUser);
    process.exit();
  });
  
  // UPDATE
  Dino.update({
      name: "T-Rex",
    },{
      where: {
        type: "Killer dinosaur",
      }}).then((numRowsChanged) => {
    // Returns a value of how many rows were altered by this update
    console.log(numRowsChanged);
    process.exit();
  });
  
  
  // DELETE
  Dino.destroy({
      where: { name: 'T-Rex' }
    }).then(numRowsDeleted=>{
        console.log(numRowsDeleted)
      // do something when done deleting
        process.exit()
    });
  
  