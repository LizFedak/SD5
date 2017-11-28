var mongoose = require('mongoose');


var addressSchema = new mongoose.Schema({
  street : {type : String, "default" : "something"},
  city : {type : String, "default" : "something"},
  state : {type : String, "default" : "something"},
  zip : {type : String, "default" : "something"}
});

var accountSchema = new mongoose.Schema({
  accountNumber: {type : Number, required : true},
  customer: {type : String, required : true}
});

var employeeSchema = new mongoose.Schema({
  name : {type : String, required : [true, "Name must not be blank"]},
  // Default values 
  email : {type : String, "default" : ""},
  salary : {type : Number, "default" : 0},
  awards : [String],
  accounts : {type : [accountSchema], "default" : []},
  address : {type : addressSchema, "default" : {}}
  // specify existing collection...default is lowercased, 
  // pluaralize model name (e.g. 'employees')
}, {collection : 'company'});
mongoose.model('Employee', employeeSchema);