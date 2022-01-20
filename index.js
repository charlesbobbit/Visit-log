const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('This page has been visited ' + visits + ' times!');
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
