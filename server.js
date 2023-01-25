// ----------------------------
// Import Dependencies---------
// ----------------------------
require("dotenv").config()
const { DATABASE_URL, PORT } = process.env
const express = require("express")
const mongoose = require("./models/connection")
const cors = require("cors")
const morgan = require("morgan")
const app = express() // Create Express App Object
const Event = require('./models/event')
const AuthRouter = require("./controllers/user")
const auth = require("./auth")
// ----------------------------
// Middleware------------------
// ----------------------------
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// ----------------------------
// Routes----------------------
// ----------------------------
// Authorization Router
app.get("/", auth, (req, res) => {
    res.json(req.payload)
})
app.use("/auth", AuthRouter)

// Index Route
app.get("/myevents", async (req, res) => {
    try{
        res.json(await Event.find({}))
    } catch(error){
        console.log(error);
        res.status(400).json(error)
    }
})

// Delete Route
app.delete("/myevents/:id", async (req, res) => {
    try{
        res.json(await Event.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update Route
app.put("/myevents/:id", async (req, res) => {
    try {
        res.json(
            await Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create Route
app.post("/myevents", async (req, res) => {
    try {
        res.json(await Event.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Show Route
app.get("/myevents/:id", async (req, res) => {
    try {
        res.json(await Event.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// ----------------------------
// Turn on Server--------------
// ----------------------------
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})