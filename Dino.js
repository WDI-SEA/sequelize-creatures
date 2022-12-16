//---OOP practice---
const db = require("./models")

class Dino {
    
    //---CREATE DINOS FUNCTION----
    async findOrCreateDino(nameInput, typeInput) {
        try {
            let foundDino = await db.dino.findOrCreate({
                where: {
                    name: nameInput,
                    type: typeInput
                }
            })
            // console.log(foundDino)
        } catch (error) {
            console.error(error.message)
        }
    }
    
    // --READ --returns array of all dinos
        async getAllDinos() {
        try {
            const allDinos = await db.user.findAll()
            // console.log(allDinos)
        } catch (error) {
            console.log(error.message)
        }
    }
        // --UPDATE --
        async updateDino(idInput, nameInput, typeInput) {
            try {
                const updatedDino = await db.dino.update(
                    { name: nameInput, type: typeInput },
                    {
                        where: {
                            id: idInput,
                        }
                    })
                // console.log(updatedDino) 
            } catch (error) {
                console.log(error.message)
            }
        }
        // // --DESTROY-- delete a dino 
        async deleteDino(idInput) {
            try {
                let deletedDino = await db.dino.destroy({
                    where: {
                        id: idInput
                    }
                })
                // console.log(deletedDino)
            } catch (error) {
                console.log(error.message)
            }
        }
}


module.exports = Dino;