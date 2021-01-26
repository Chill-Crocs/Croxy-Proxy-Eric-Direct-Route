const express = require('express');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.static(PUBLIC_DIR));

const PORT = 3000 || process.env.PORT;

app.get('/api/item/:itemID', (req, res) => {
  axios.get(`http://localhost:3003/api/item/${5}`)
    .then((result) => res.send(result.data));
});

app.get('/api/relatedItems/:id', (req, res) => {
  axios.get(`http://localhost:3001/api/relatedItems/${5}`)
    .then((result) => res.send(result.data));
});
app.get('/api/reviews', (req, res) => {
  axios.get('http://localhost:3002/api/reviews')
    .then((result) => res.send(result.data));
});
app.get('/api/items/:itemID', (req, res) => {
  axios.get(`http://localhost:3004/api/items/${5}`)
    .then((result) => res.send(result.data));
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
