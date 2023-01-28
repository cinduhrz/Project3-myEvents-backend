const mongoose = require('./connection')


// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const EventSchema = new Schema({
  title: String,
    url: String,
    dateTime: Date,
    description: String,
    username: String
  
});


const Event = model("Event", EventSchema);
module.exports = Event

