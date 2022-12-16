//---OOP PRACTICE----
const db = require("./models")
const Dino = require('./Dino')

let dino = new Dino()

dino.findOrCreateDino()
dino.getAllDinos()
dino.updateDino()
dino.deleteDino()
