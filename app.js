const express = require('express');
const db = require('./queries')
const app = express();
const port = 3001;
var cors = require('cors')


app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/api/apprentices', db.getApprentices)
app.get('/api/cohorts', db.getCohorts)

app.post('/api/apprentices', db.addApprentice)

app.get('/api/search/first', db.searchByFirst)
app.get('/api/search/last', db.searchByLast)
app.get('/api/search/id', db.searchById)
app.get('/api/search/city', db.searchCohortByCity)
app.get('/api/search/year', db.searchCohortByYear)






app.listen(port);
console.log(`I'm listening on 3001!`)