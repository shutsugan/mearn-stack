'use strict';

const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const db = require('./models/db');
const items = require('./routes/api/items');

const app = express();

app.use(body_parser.json());

app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port = process.env.POST || 5000;
app.listen(port, _ => console.log('Running on 5000...'));
