"use strict";

require('dotenv').config();

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World');
});
console.log('QUE ONDA PERRO');
app.listen(process.env.PORT, function () {
  console.log('Servidor corriendo en puerto: ', process.env.PORT);
});