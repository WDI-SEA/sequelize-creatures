const db = require('./models');

async function createCreature(obj) {
    try {
        const newCreature= await db.creature.create(obj)
    } catch (err) {
        console.log(err)
    }
}
// createCreature({
//     "type":"giant beaver",
//     "img_url":"http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg"
//   });
//   createCreature({
//     "type":"mastodon",
//     "img_url":"https://cdn-images-1.medium.com/max/1200/1*a2VvYsKGApR-E1SnT5O7yQ.jpeg"
//   });
//   createCreature({
//     "type":"saber-toothed salmon",
//     "img_url":"https://cottagelife.com/wp-content/uploads/2014/11/Oncorhynchus_rastrosus.jpg"
//   });
//   createCreature({
//     "type":"megalonyx",
//     "img_url":"https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg?w=584&h=325"
//   });

async function readAllCreature() {
    try {
        const allCreature = await db.creature.findAll()
        console.log(allCreature)
    } catch (err) {
        console.log(err)
    }
}
readAllCreature();

async function updateCreature() {
    try {
        const numRowChanged = await db.creature.update({type: 'mastodon'}, {
            where: {
                img_url: 'https://cdn-images-1.medium.com/max/1200/1*a2VvYsKGApR-E1SnT5O7yQ.jpeg'
            }
        })
        console.log(numRowChanged)
    } catch (err) {
        console.log(err)
    }
}
updateCreature()

async function destroyCreature() {
    try {
        const numRowDeleted = await db.creature.destroy({
            where: {
                type: 'mastodon'
            }
        })
        console.log(numRowDeleted)
    } catch (err) {
        console.log(err)
    }
}
destroyCreature()