"use strict";

require('dotenv').config();

var Server = require('./models/server');

var server = new Server();
server.listen();