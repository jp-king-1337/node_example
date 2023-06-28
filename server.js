const express = require("express");
const path = require("path");

const app = express();

app.get("/", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send("Hello from the about route!");
})

app.get("/api/data", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send({
        message: "Wow, we made an API!",
        date: new Date()
    })
})

app.listen(3333, () => console.log("Server started on port 3333."));