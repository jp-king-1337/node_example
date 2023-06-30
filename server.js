const express = require("express");
const { v4 } = require("uuid");
const path = require("path");
const Note = require("./note.js");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

// Load Routes

// Post route to retrieve the form data
app.post("/notes", (clientReq, serverRes) => {
  const id = v4();

  console.log(clientReq.body);
});

app.listen(3333, () => console.log("Server started on port 3333."));
