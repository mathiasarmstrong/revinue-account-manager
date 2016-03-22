var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config');

var app = module.exports = express.Router();


var accounts = require('./accounts');
var account = require('./account');
app.get('/api/accounts', function(req, res) {
  res.status(200).json(accounts);
})
app.get('/api/account/:id', function(req, res) {
  res.status(200).json(account);
})
