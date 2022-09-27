const mongoose = require("mongoose");
const express = require("express");
const app = express();
const url = process.env.MONGODB_URI;

const noteSchema = new mongoose.Schema({
  content: String,
  name: String,
  age: Number,
  date: Date,
});
mongoose
  .connect(url)
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = mongoose.model("Note", noteSchema);
