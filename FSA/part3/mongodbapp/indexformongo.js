const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5001;
const cors = require("cors");



app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("error");
});





const url = "mongodb+srv://newkarim:karim@cluster0.fdc02zk.mongodb.net/?retryWrites=true&w=majority"

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const note = new Note({
      content: 'HTML is Easy',
      date: new Date(),
      important: true,
    })

    return note.save()
  })
  .then(() => {
    console.log('note saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))


