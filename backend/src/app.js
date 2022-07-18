const express = require('express');
const getMatchDetails = require('./utils/opendota').getMatchDetails;
const getLeagueDetails = require('./utils/opendota').getLeagueDetails;

const app = express();
const port = 3001;

app.get('/match/:id', (req, res) => {
  getMatchDetails(req.params['id']);
  res.send(`${res.statusCode} Done`);
});

app.get('/league/:id', (req, res) => {
  const body = getLeagueDetails(req.params['id']);
  console.log('body: ', body);
  res.send(`${res.statusCode} Done`);
});

app.listen(port, () => {
  console.log(`RVDL app started on port ${port}`);
});

module.exports = app;
