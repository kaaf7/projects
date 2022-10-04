const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
const newUrl =
  "mongodb+srv://newkarim:karim@cluster0.fdc02zk.mongodb.net/?retryWrites=true&w=majorit";
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});
mongoose
  .connect(newUrl)
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
