require("dotenv").config();
const Note = require("./models/note");
const cors = require("cors");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("build"));
const PORT = process.env.PORT;

let notes = [
  {
    id: 88,
    content: "new element",
    date: "2022-09-19T22:01:25.495Z",
    important: true,
  },
  {
    id: 715,
    content: "ssa",
    date: "2022-09-19T22:01:55.051Z",
    important: false,
  },
  {
    id: 1306,
    content: "sasa",
    date: "2022-09-19T22:02:42.283Z",
    important: true,
  },
  {
    id: "e26ce6e3-7693-400d-b724-5fc78257c285",
    content: "HTML is easy",
    date: "2022-09-19T22:11:59.720Z",
    important: false,
  },
  {
    id: "3ab033cd-2a82-4975-957b-ce7b4da69489",
    content: "we will make it",
    date: "2022-09-19T22:12:03.756Z",
    important: false,
  },
  {
    id: "7002ae77-3d1f-4a41-afa2-dce95a2cf452",
    content: "we started to learn faster",
    date: "2022-09-19T22:12:10.633Z",
    important: true,
  },
  {
    id: "63d4a140-5594-4a13-b69e-8b25287e8a5e",
    content: "it is getting easier",
    date: "2022-09-19T22:12:20.366Z",
    important: true,
  },
  {
    id: "fb72735d-9b92-4859-a698-4b0f91f25c7a",
    content: "we can update and delete",
    date: "2022-09-19T22:12:25.162Z",
    important: true,
  },
];

//get section
app.get("/", (req, res) => res.send("new backend server"));

app.get("/notes", (request, response) => {
  Note.find({}).then((notes) => response.json(notes));
});

app.post("/notes", (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content is missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  });
});

app.get("/info", (req, res) => {
  let peopleNumber = notes.length;
  let date = new Date();
  res.send(`phonebook has info for ${peopleNumber} people
 , ${date}
  `);
});

app.get("/notes/:id", (request, response) => {
  Note.findById(request.params.id).then((note) => {
    response.json(note);
  });
});

app.delete("/notes/:id", (req, res) => {
  const personId = Number(req.params.id);
  Note.findById(!req.params.id).then((deletedNote) => {
    response.json(deletedNote);
  });
  res.status(204).end();
});

app.listen(PORT, () => console.log("Server running on port 5050!"));
