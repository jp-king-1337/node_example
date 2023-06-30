const fs = require("fs");
const { v4 } = require("uuid");
const path = require("path");
const DB_PATH = path.join(__dirname, "../db/notes.json");

function getNotes() {

    try {
        JSON.parse(fs.readFileSync(DB_PATH, "utf8"))
        return notes;
    } catch (err) {
        return [];
    }
//     const notes = JSON.parse(fs.readFileSync(DB_PATH, "utf8")) || [];
//     return notes;
}

class Note {
    constructor(text) {
        this.id = v4();
        this.text = text;
    }

    save() {
        const notes = getNotes();

        notes.push(this);

        fs.writeFile(DB_PATH, JSON.stringify(notes), err => {
            if (err) throw err;

            console.log("Note saved successfully!");
        });
    }
}

module.exports = Note;
