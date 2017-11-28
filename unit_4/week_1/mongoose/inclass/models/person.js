var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  firstname : String,
  lastname : String
});

mongoose.model('Person', personSchema, 'people');