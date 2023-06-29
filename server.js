const express = require("express");
const path = require("path");

const app = express();


// Will send the index.html file as response
app.get("/", (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, "index.html"));
});



app.listen(3333, () => console.log("Server started on port 3333."));
