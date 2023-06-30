const express = require("express");
const { Note, getNotes } = require("./models/Note");
// const path = require("path");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

// Load Routes

// Post route to retrieve the form data
app.post("/notes", (clientReq, serverRes) => {

    const newNote = new Note(clientReq.body.note);

    newNote.save();

    // Respond back to the client to complete the request
    serverRes.redirect("/");
});

app.get("/notes", (clientReq, serverRes) => {
    const notes = getNotes();

    // .send will stringify to JSON for you
    serverRes.send(notes);
})

app.listen(3333, () => console.log("Server started on port 3333."));
