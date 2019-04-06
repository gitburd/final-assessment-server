const express = require('express');
const db = require('./queries')

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', function(req, res){
    res.send('hello world');
  });

app.get('/test', db.testConnection)
  




app.listen(port);
console.log(`I'm listening on 3001!`)