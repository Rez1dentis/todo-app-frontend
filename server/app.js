require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const bcrypt = require('bcrypt');
const { Users, Posts } = require('./db/models');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));


app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
