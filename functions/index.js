"use strict";
exports.__esModule = true;
var express = require("express");
var functions = require("firebase-functions");
var angular_universal_express_1 = require("angular-universal-express");
// const main = require(__dirname + '/main.bundle.js');
// const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
var app = express();
app.get('**', angular_universal_express_1.angularUniversal({
    index: __dirname + '/index.html',
    main: __dirname + '/main.bundle',
    enableProdMode: true
}));
exports.ssrapp = functions.https.onRequest(app);
