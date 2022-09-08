const db = require("./models");

// Dinosaurs
const dinosaurCRUD = async () =>
{
    try
    {
        // CREATE
        const newDino = await db.dinosaur.create(
        {
            name: "Rex",
            type: "tyrannosaurus"
        })
    
        // READ
        console.log(await db.dinosaur.findAll());

        // UPDATE
        const numRowsChanged = await db.dinosaur.update({name: "Rexy"},
        {
            where:
            {
                id: 2
            }
        })

        // DELETE
        const numRowsDeleted = await db.dinosaur.destroy(
        {
            where:
            {
                id: 3
            }
        })
    }
    catch(err)
    {
        console.warn(err);
    }
}
dinosaurCRUD();

// Creatures
const creatureCRUD = async () =>
{
    try
    {
        // CREATE
        const newCreature = await db.creature.create(
        {
            type: "saber-toothed tiger",
            img_url: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/smilodon_full_uxjf9q.jpg"
        })
    
        // READ
        console.log(await db.creature.findAll());

        // UPDATE
        const numRowsChanged = await db.creature.update({type: "kitty"},
        {
            where:
            {
                id: 2
            }
        })

        // DELETE
        const numRowsDeleted = await db.creature.destroy(
        {
            where:
            {
                id: 3
            }
        })
    }
    catch(err)
    {
        console.warn(err);
    }
}
creatureCRUD();