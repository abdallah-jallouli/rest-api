// we use two methods of mongoose which are: 
// schema which represent the "squelette de données "
// model which used to export our object as a model (i think)
const mongoose = require("mongoose")


const Schema = mongoose.Schema
const userSchema = new Schema({
    fullname : String , 
    email : String , 
    phone : String
})
module.exports = mongoose.model("user" , userSchema)