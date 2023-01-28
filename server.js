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
const EventRouter = require("./controllers/eventController")
const AuthRouter = require("./controllers/user")
const auth = require("./auth")

// ----------------------------
// Middleware------------------
// ----------------------------
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// ----------------------------
// Routers----------------------
// ----------------------------)
// Authorization Router
app.get("/", auth, (req, res) => {
    res.json(req.payload)
})

app.use("/auth", AuthRouter)

app.use("/myevents", EventRouter)


// ----------------------------
// Turn on Server--------------
// ----------------------------
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})