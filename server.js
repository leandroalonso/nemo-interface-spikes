'use strict';

let connect = require('connect');
let serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);
