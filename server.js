const express = require("express");
const path = require("path");

const app = express();

console.log(__dirname);

const people = [
    {
        id: 1,
        name: "JP",
        age: 26
    },
    {
        id: 2,
        name: "Bob",
        age: 99
    }
];


// Will send the index.html file as response
app.get("/", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/people", (clientRequestObject, serverResponseObject) => {
    const userObj = people.find((personObj) => {
        return personObj.id == clientRequestObject.query.id
    });

    serverResponseObject.send(userObj ? userObj : {
        message: "User not found.",
        error: 404
    });
});

app.listen(3333, () => console.log("Server started on port 3333."));






// Query Param Activity
// Visit this url - http://localhost:3333/api/people?id=1
// Grab the id from the query param list and use it to send the user object matching the id
// If the id does not match a user, then send back a “cannot find user” message.\