// app.js configuration for body-parser

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mySql module in (modles/mysql.js)

var mysql = require('mysql');

exports.getConnection = function(callback){
  var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'guest',
    password : 'guest',
    database : 'todoDB'
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to todoDb');
      return callback(err);
    }
    callback(err, con);
  });
};

//controller functions for mysql queries in (controllers/main.js)
var mysql = require('../models/mysql.js');

//code for a get request
module.exports.index = function(req, res){
    mysql.getConnection(function(err, con){
      con.query('Select * from todos', function(err, rows){
          if(err) throw err;
          res.render('index', { title : 'Express Todo App', todos: rows });
      });
    });
};

//code for a post request
module.exports.create = function(req, res){
    var content = req.body.content;
    mysql.getConnection(function(err, con){
      con.query('INSERT INTO todos (content) VALUES ("' + content + '")');
    });
    res.redirect('/');
};
