const express = require("express");

const app = express();

app.get("/", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send("Hello there!");
});

app.get("/index.html", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send("This is a home page!");
})

app.get("/about", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send("Boom a message!");
})

app.listen(3333, () => console.log("Server started on port 3333."));