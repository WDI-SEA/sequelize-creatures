const db = require('./models')

const dinoCRUD = async () => {
    try {
        // CREATE DINO
        const newDino = await db.dino.create({
            name: 'YourMomASaurus',
            type: 'big scary dinosaur'
        });
        console.log(newDino);
    }   catch(err) {console.warn(err);
    }
}
dinoCRUD();

const creatureCRUD = async () => {
    try{
        //CREATE CREATURE
        const newCreature = await db.creature.create({
            img_url: "https://yt3.ggpht.com/a/AATXAJwaCF0AVQ2rHS2t6LSg5vjynPoWDH95r0m5uQ=s900-c-k-c0xffffffff-no-rj-mo",
            type: "Perry The Platapus"
        })``
    } catch(err) {console.warn(err)};
}

creatureCRUD();