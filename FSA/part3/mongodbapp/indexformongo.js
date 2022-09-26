const PORT = process.env.PORT || 5001;
const express = require("express");
const app = express();
const url = "";
const mongoose = require("mongoose");
const { default: Note } = require("../../part2/forms/src/Note");

const noteSchema = mongoose.noteSchema({
  content: String,
  important: Boolean,
  date: Date,
});

const Note = mongoose.model("Note", noteSchema);
mongoose
  .connect(url)
  .then((results) => {
    console.log("mongoose is connected");
    const note = new Notes({
      content: "new content",
      important: true,
      date: new Date(),
    });
    return note.save();
  })
  .then(() => {
    console.log("data is saved");
    mongoose.connection.close();
  });

