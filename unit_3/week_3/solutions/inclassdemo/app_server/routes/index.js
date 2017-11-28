var express = require('express');
var router = express.Router();
var controller = require('../controllers/main');

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/contact', controller.contact);

module.exports = router;
