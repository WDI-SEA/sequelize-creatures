const db = require('./models')

async function userCrud() {
    try {
        //CREATE
        const newDino = await db.dino.create({
            id: 1,
            name: 'Godzilla',
            type: 'T-rex'
        })
        console.log(`new user name ${newDino.name} is a ${newDino.type}`)

        //READ
        const allDinos = await db.dino.findAll()
            // console.log(allDinos)
            allDinos.forEach(dino => console.log(user.firstName))
        const allGodzillas = await db.user.findAll({
                where: {
                    name: 'Godzilla'
                }
            })
            // console.log(allGodzillas)
        const oneDino = await db.dino.findOne({
            where: {
                name: 'Godzilla'
            }
        })
        const [user, created] = await db.dino.findOrCreate({
            where: {
                name: 'Steggie'
            },
            defaults: {
                id: 2,
                type: 'Stegasaurus'
            }
        })
        console.log('was Steggie created?', created)
        console.log(dino.name)

        //UPDATE
        const idChange = await db.dino.update({ id: 5}, {
            where: {
                name: 'Godzilla'
            }
        })
        console.log(idChange)
        
        //DESTROY
        const idDeleted = await db.dino.destroy({
            where: {
                firstName: 'Godzilla'
            }
        })
        console.log(idDeleted)
    } catch (err) {
        console.log(err)
    }  
}

//CREATE

userCrud()