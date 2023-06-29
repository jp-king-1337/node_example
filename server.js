const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// Will send the index.html file as response

app.get("/about", (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, "public/about.html"));
});

app.get("/api/test", (clientRequestObj, serverResponseObj) => {
  serverResponseObj.send({
    name: "JP",
    age: 26
  });
});

app.listen(3333, () => console.log("Server started on port 3333."));
