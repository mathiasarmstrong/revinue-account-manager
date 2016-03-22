import mysql from 'mysql';
// var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'dw.ampush1.com',
  user     : 'dwread',
  password : 'pr@line99',
  database : 'dw'
});

export default connection.connect()
