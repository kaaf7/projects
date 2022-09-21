const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelae",
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

//get section
app.get("/", (req, res) => res.send("Hello"));

app.get("/persons", (req, res) => {
  res.status(200).json(persons);
});

app.get("/info", (req, res) => {
  let peopleNumber = persons.length;
  let date = new Date();
  res.send(`phonebook has info for ${peopleNumber} people
 , ${date}
  `);
});

app.get("/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => {
    return person.id === id;
  });
  if (person) {
    res.send(person);
  }
  /*   if (person) {
    res.send(person);
  } else if (id === "info") {
    res.send("info");
  } else {
    //res.status(404).end();
    res.send("404 Error, person does not exist!");
  } */
});

app.post("/persons", (req, res) => {
  const personobjectt = {
    id: "8",
    name: "Art Hellas",
    number: "040-123456",
  };

  persons.find((person) => {
    for (let prop in personobjectt) {
      if (
        personobjectt[prop] == "" ||
        person.name === personobjectt.name ||
        person.id === personobjectt.id
      ) {
        res.send("this person already exists in the phonebook");
      } else {
        res.json(personobjectt);
        persons = persons.concat(personobjectt);
      }
    }
  });
});

app.delete("/persons/:id", (res, req) => {
  const personId = Number(req.params.id);
  persons = persons.filter((person) => person.id !== personId);
  res.status(204).end();
});

app.listen(4070, () => console.log("Server running on port 3000!"));
