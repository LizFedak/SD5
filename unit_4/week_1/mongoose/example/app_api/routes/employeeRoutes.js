var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/employeeCtrl');

router.get('/', ctrl.index);
router.put('/:id/remove', ctrl.remove);
router.put('/:id/add', ctrl.add);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.get('/:id', ctrl.show);
router.delete('/:id', ctrl.destroy);


module.exports = router;