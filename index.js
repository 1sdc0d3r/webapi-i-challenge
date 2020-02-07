// implement your API here
const express = require("express");

const server = express();
server.use(express.json());

const port = 8000;

server.get("/", (req, res) => {
  res.send("Hello World!!");
});

server.get("/hobbits", (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee"
    },
    {
      id: 2,
      name: "Frodo Baggins"
    }
  ];
  res.status(200).json(hobbits);
}); // READ data

server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
}); // CREATE data

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); // UPDATE data

server.delete("/hobbits", (req, res) => {
  res.sendStatus(204);
}); // DESTROYING/DELETING data

server.listen(port, () => {
  console.log(`API running on port ${port}`);
});
