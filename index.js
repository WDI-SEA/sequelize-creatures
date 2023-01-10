const db = require('./models')

const create = async() => {
    const createDino = await db.create({
        name: 'sean',
        type: 'dopeasaurus'
    })
    const createdCreatures = await db.creature.create({
        img_url: "https:www.placekitten.com",
        type: 'kitten'
    })
}
// dont forget to invoke!

create()

const read = async() => {
    const foundDino = await db.dino.findOne({
        where: {
            name: 'sean'
        }
    })
}

const update = async()=>{
    const updateDino = await db.dino.update({
        name: 'seanathan taylor thomas', type: 'sixth sense'
    }, {
        where: {
            name: 'sean'
        }
    })
}

update()