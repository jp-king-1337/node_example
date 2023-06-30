const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

// Load Routes

// Post route to retrieve the form data
app.post("/notes", (clientReq, serverRes) => {
    
});

app.listen(3333, () => console.log('Server started on port 3333.'));