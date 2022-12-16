// importing entire models folder and mounting it on the database:
const db = require('./models')

// ===== DINOS ===== //

// Overarching function:
async function dinoCrud () {
    try {
        // == CREATE == //

            //(created all 5 dinos and commented each out as I went to avoid duplicate creations)

            // Littlefoot:
                const newDino = await db.dino.create({
                    name: "Littlefoot",
                    type: "apatosaurus"
                })
                console.log(newDino)

            // Cera:
                const newDino = await db.dino.create({
                    name: "Cera",
                    type: "triceratops"
                })
                console.log(newDino)

            // Ducky:
                const newDino = await db.dino.create({
                    name: "Ducky",
                    type: "saurolophus"
                })
                console.log(newDino)

            // Petrie:
                const newDino = await db.dino.create({
                    name: "Petrie",
                    type: "pteranodon"
                })
                console.log(newDino)

            // Spike:
                const newDino = await db.dino.create({
                    name: "Spike",
                    type: "stegosaurus"
                })
                console.log(newDino)

        // == READ == //

            const oneDino = await db.dino.findOne({
                where: {
                    name: 'Ducky'
                }
            })
            console.log(oneDino)
        
        // == UPDATE == //

            const updatedDinoName = await db.dino.update({name:"Spikalicious"}, {
                where: {
                    name: 'Spike'
                }
            })
            console.log(updatedDinoName)
        
        // == DESTROY == //

            const deletedDino = await db.dino.destroy({
                where: {
                    name: 'Petrie'
                }
            })
            console.log(deletedDino)

    } catch (err) {
        console.log(err)
    }
}

//invoke function at the end:
dinoCrud()



// ===== CREATURES ===== //

// Overarching function:
async function creatureCrud () {
    try {
        // == CREATE == //

            //(created all 4 creatures and commented each out as I went to avoid duplicate creations)
            // (ids are wonky because I did some additions/deletions before I was happy with everything and the indices didn't restart)

            // Giant beaver:
                const newCreature = await db.creature.create({
                    type: "Giant beaver",
                    img_url: "http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg"
                })
                console.log(newCreature)

            // Mastodon:
                const newCreature = await db.creature.create({
                    type: "Mastodon",
                    img_url: "https://cdn-images-1.medium.com/max/1200/1*a2VvYsKGApR-E1SnT5O7yQ.jpeg"
                })
                console.log(newCreature)

            // Saber-toothed salmon:
                const newCreature = await db.creature.create({
                    type: "Saber-toothed salmon",
                    img_url: "https://cottagelife.com/wp-content/uploads/2014/11/Oncorhynchus_rastrosus.jpg"
                })
                console.log(newCreature)

            // Megalonyx:
                const newCreature = await db.creature.create({
                    type: "Megalonyx",
                    img_url: "https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg?w=584&h=325"
                })
                console.log(newCreature)

        // == READ == //

            const oneCreature = await db.creature.findOne({
                where: {
                    type: 'Mastodon'
                }
            })
            console.log(oneCreature)
        
        // == UPDATE == //

            const updatedCreaturetype = await db.creature.update({type:"Mastodonalicious"}, {
                where: {
                    type: 'Mastodon'
                }
            })
            console.log(updatedCreaturetype)
        
        // == DESTROY == //

            const deletedCreature = await db.creature.destroy({
                where: {
                    type: 'Saber-toothed salmon'
                }
            })
            console.log(deletedCreature)

    } catch (err) {
        console.log(err)
    }
}

//invoke function at the end:
creatureCrud()

