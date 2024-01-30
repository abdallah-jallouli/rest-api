// mongoose will be used in "connectDb" function 
// we use from mongoose connect mothod
const mongoose = require("mongoose")

// exported function that will be run in server.js 
// connectDb fuction is responsible for connecting the database to the server (i think)
const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.db)
        console.log("database is succesfully connceted")
    } catch (error) {
        console.log(error.message)
    }
}

// export the function to be used in server.js
module.exports = connectDb