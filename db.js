const mongoose = require('mongoose');

// define connection url for mongodb
const mongoURL = "mongodb://127.0.0.1:27017/hotels"; //replace after this '/' such as  hotels to dtabase name

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to MongoDB server');
});

db.on("error", (err) => {
  console.log("MongoDB connection : error",err);
});

db.on("disconnected", () => {
  console.log("disconnected to MongoDB server");
});

module.exports = db;