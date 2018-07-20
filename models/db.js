'use strict';

const mongoose = require('mongoose');
const db_config = require('../config/db');

mongoose.connect(db_config.mongo_URI, {useNewUrlParser: true})
  .then(_ => console.log('connected...'))
  .catch(err => console.log(err));
