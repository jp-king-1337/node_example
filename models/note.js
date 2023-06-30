const fs = require("fs");

// This is a synchronous function
function getNotes() {
    return fs.readFileSync("../db/notes.json", "utf8");
}

// create a Note class constructor that generates a note object with one property, text
class Note {
    constructor(text) {
        this.text = text;
    }
}

module.exports = Note;