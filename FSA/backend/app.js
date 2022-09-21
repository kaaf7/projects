const express = require("express");
const app = express();
//app.use(express.json());

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (response, requrest) => {
  response.send("hello");
});

// app.get("/api/persons", (response, request) => {
//  // const person = request.body;
//   response.json(persons);
// });

const PORT = 8090;
app.listen(PORT, () => {
  console.log("server is running");
});
app.get();

// const express = require('express')
// // Create Express app
// const app = express()
// // A sample route
// app.get('/', (req, res) => res.send('Hello World!'))

// // Start the Express server
// app.listen(8080, () => console.log('Server running on port 3000!'))

// app.get("/api/persons/:id", (response, request) => {
//   const id = Number(request.params.id);
//   const person = person.map((person) => {
//     return person.id === id;
//   });
//   if (person) {
//     response.json(person);
//   } else {
//     response.status(404).end();
//   }
// });

// app.post("/api/persons", (response, request) => {
//   let uniqueId = uuidv4();
//   const newPerson = { id, newName, newNumber };
//   newPerson.id = uniqueId;
//   newPerson.newNumber = 123412121;
//   persons = persons.concat(newPerson);
//   response.json(newPerson);
// });

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end(JSON.stringify(notes));
/* // });;

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = persons.find((note) => {
    return note.id === id;
  });
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});



app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.post("api/notes", (request, response) => {
  const note = request.body;
  console.log(note);
  response.json(note);
});


 */
