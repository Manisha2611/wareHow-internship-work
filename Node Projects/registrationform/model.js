
var mongoose = require('mongoose');

var formSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: String,
    email: String,
    password: String,
    repassword: String,
    // gender: String,
    address:String
});

var Form = module.exports = mongoose.model('form', formSchema);
module.exports.get = function (callback, limit) {
    Form.find(callback).limit(limit);
}