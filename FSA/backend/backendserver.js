const express = require("express");
const app = express();
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "HTML is easy",
    date: "2020-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 3,
    content: "HTML is ",
    date: "2021-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 4,
    content: "HTML is ",
    date: "2021-05-30T17:30:31.098Z",
    important: true,
  },
];

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end(JSON.stringify(notes));
// });
console.log("loaded");

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => {
    return note.id === id;
  });
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })

app.post("api/notes", (request, response) => {
  const note = request.body;
  console.log(note);
  response.json(note);
});

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
