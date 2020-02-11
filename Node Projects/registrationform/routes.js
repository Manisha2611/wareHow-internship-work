

let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Registration form  with love!',
    });
});

var controller = require('./controller');

router.route('/forms')
    .get(controller.index)
    .post(controller.new);

router.route('/forms/:form_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);



module.exports = router;