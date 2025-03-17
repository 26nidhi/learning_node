const mongoose = require('mongoose');

// define connection url for mongodb
// const mongoURL = process.env.MONGODB_URL_LOCAL; //replace after this '/' such as  hotels to dtabase name
 const mongoURL = process.env.MONGODB_URl;

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