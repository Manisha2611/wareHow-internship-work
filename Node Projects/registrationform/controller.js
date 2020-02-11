

 Form = require('./model');

exports.index = function (req, res) {
    Form.get(function (err, forms) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            
            data: forms
        });
    });
};

exports.new = function (req, res) {
    var form = new Form();
    form.fname = req.body.fname ? req.body.fname : form.fname;
    form.lname = req.body.lname;
    form.password = req.body.password;
    form.repassword = req.body.repassword;
    form.email = req.body.email;
   // form.gender = req.body.gender;
    form.address = req.body.address;
    
    
    form.save(function (err) {
        
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New contact created!',
                data: form
            });
    });
};

exports.view = function (req, res) {
    Form.findById(req.params.form_id, function (err, form) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: form
        });
    });
}
exports.update = function (req, res) {
    Form.findById(req.params.form_id, function (err, form) {
        if (err)
            res.send(err);
        form.fname = req.body.fname ? req.body.fname : form.fname;
        form.lname = req.body.lname;
        form.password = req.body.password;
        form.repassword = req.body.repassword;
        form.email = req.body.email;
       // form.gender = req.body.gender;
        form.address = req.body.address;
        

        form.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: form
            });
        });
    });
};

exports.delete = function (req, res) {
    Form.remove({
        _id: req.params.form_id
    }, function (err, form) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};