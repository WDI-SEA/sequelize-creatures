const db = require('./models')

db.dino.create({
    id: '1',
    name: 'Spinosaurus',
    type: 'S. aegyptiacus',
}).then(createdUser=>{
    // the create promise returns the
    // new row of data that has been created
    // (otherwise it throws an error)
    console.log(createdUser)
    // terminates the node process at this point so that we don't have to force-quit
    process.exit()
})