const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

// Load Routes



app.listen(3333, () => console.log('Server started on port 3333.'));