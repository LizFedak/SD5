var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/todoCtrl');

router.get('/', ctrl.index);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.destroy);
router.post('/', ctrl.create);

module.exports = router;