var express = require('express');
var router = express.Router();
var cookieCtrl = require('../controllers/cookieCtrl');

router.get('/', cookieCtrl.index);

router.post('/set', cookieCtrl.setCookie);

router.get('/clear', cookieCtrl.clear);

router.get('/login', cookieCtrl.login);

router.get('/test', cookieCtrl.test);

router.get('/:id', cookieCtrl.show);


module.exports = router;