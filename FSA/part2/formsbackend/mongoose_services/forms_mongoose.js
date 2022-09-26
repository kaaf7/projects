const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("build"));

const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
  content: String,
  important: Boolean,
  date: Date,
});
const Note = mongoose.model("Note", noteSchema);

const SaveNoteInMongo = (content, important, date, url) => {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");
      const note = new Note({
        content: content,
        important: important,
        date: date,
      });
      return note.save();
    })
    .then(() => {
      console.log("note is saved");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error(err);
    });
};
app
  .listen(PORT, () => {
    console.log("connected");
  })
  .then(SaveNoteInMongo());

Note.find((notElement) => notElement.important === true);
