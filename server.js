const express = require("express");

const app = express();

app.get("/", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send("Hello there!");
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

app.get("/home", (clientRequestObject, serverResponseObject) => {
    serverResponseObject.sendFile("/Users/jp/bootcamp/practice/node_example/index.html");
})

app.listen(3333, () => console.log("Server started on port 3333."));