// Import Dependencies
require("dotenv").config()
const { DATABASE_URL } = process.env
const mongoose = require("mongoose")

// ----------------------------
// Connect to DB---------------
// ----------------------------
mongoose.set('strictQuery', false)
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error))

    
// Export the Connection
module.exports = mongoose