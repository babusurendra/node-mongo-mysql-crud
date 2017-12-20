var express = require('express');
var empcontroller = require('../controllers/emp.controller');
var router = express.Router();
router.get('/', empcontroller.list);
router.post('/', empcontroller.create);
router.put('/:eid', empcontroller.update);
router.delete('/:eid', empcontroller.delete);
module.exports = router;