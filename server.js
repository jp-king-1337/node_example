const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

const people = [
  {
    id: 1,
    name: 'JD',
    age: 43
  },
  {
    id: 2,
    name: 'Bob',
    age: 99
  }
];


// Will send the index.html file as response
app.get('/', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/people', (clientRequestObject, serverResponseObject) => {
  console.log(clientRequestObject.query);
  serverResponseObject.send({
    message: 'Wow, we made an API',
    date: new Date()
  })
});

app.listen(3333, () => console.log('Server started on port 3333.'));