const express = require('express');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.json());
app.use(express.static(PUBLIC_DIR));

const PORT = 3000 || process.env.PORT;

app.get('/api/item/:itemID', (req, res) => {
  axios.get(`http://3.140.252.86:3003/api/item/${77}`)
    .then((result) => res.send(result.data));
});

app.get('/api/relatedItems/:id', (req, res) => {
  axios.get(`http://3.23.86.72:3001/api/relatedItems/${0}`)
    .then((result) => res.send(result.data));
});
app.get('/api/reviews/:id', (req, res) => {
  axios.get(`http://18.221.226.62:3002/api/reviews/${0}`)
    .then((result) => res.send(result.data));
});
app.get('/api/items/:itemID', (req, res) => {
  axios.get(`http://3.140.248.238:3004/api/items/${0}`)
    .then((result) => res.send(result.data));
});
app.patch('/api/items/:itemID', (req, res) => {
  axios.patch(`http://3.140.248.238:3004/api/items/${0}`, { favorite: req.body.favorite })
    .then(() => res.sendStatus(204));
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
