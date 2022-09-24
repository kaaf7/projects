const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors());

let persons = [
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
app.get("/", (req, res) => res.send("newbacend"));

app.get("/notes", (req, res) => {
  res.status(200).json(persons);
});

app.get("/info", (req, res) => {
  let peopleNumber = persons.length;
  let date = new Date();
  res.send(`phonebook has info for ${peopleNumber} people
 , ${date}
  `);
});

app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => {
    return person.id === id;
  });
  if (person) {
    res.send(person);
  }
  /*   if (person) {
    res.send(person);
  } else if (id === "info") {nod
    res.send("info");
  } else {
    //res.status(404).end();
    res.send("404 Error, person does not exist!");
  } */
});

app.post("/notes", (req, res) => {
  const personobjectt = {
    id: "fb727351d-9b92-4859-a698-4b0f91f25c7a",
    content: "we can update",
    date: "2022-09-19T22:12:25.162Z",
    important: true,
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

app.delete("/notes/:id", (res, req) => {
  const personId = Number(req.params.id);
  persons = persons.filter((person) => person.id !== personId);
  res.status(204).end();
});

app.listen(9090, () => console.log("Server running on port 3000!"));
