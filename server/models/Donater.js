const mongoose = require('mongoose')

const DonaterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const DonaterModel = mongoose.model("Donaters",DonaterSchema)
module.exports = DonaterModel

