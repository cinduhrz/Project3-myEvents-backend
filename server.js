// ----------------------------
// Import Dependencies---------
// ----------------------------
require("dotenv").config()
const { DATABASE_URL, PORT } = process.env
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const app = express() // Create Express App Object


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


// ----------------------------
// Create Schema and Model-----
// ----------------------------
const { Schema, model } = mongoose
const EventSchema = new Schema({
    title: String,
    url: String,
    dateTime: Date,
    description: String,
    username: String
})

const Event = model("Event", EventSchema)


// ----------------------------
// Middleware------------------
// ----------------------------
app.use(cors())
app.use(morgan("dev"))


// ----------------------------
// Routes----------------------
// ----------------------------
app.get("/", (req, res) => {
    res.send("Hello World")
})


// ----------------------------
// Turn on Server--------------
// ----------------------------
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})