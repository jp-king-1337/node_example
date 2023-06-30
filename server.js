const express = require("express");
// const path = require("path");
const Note = require("./models/note");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

// Load Routes

// Post route to retrieve the form data
app.post("/notes", (clientReq, serverRes) => {
    const newNote = new Note(clientReq.body.note);
});

app.listen(3333, () => console.log("Server started on port 3333."));
