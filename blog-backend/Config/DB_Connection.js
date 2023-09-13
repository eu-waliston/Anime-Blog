const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = "mongodb+srv://waliston:1540758698704680@cluster0.hxjqrew.mongodb.net/"

const mongoDB = DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("once", () => {
  console.log("Connected to MongoDB");
});
