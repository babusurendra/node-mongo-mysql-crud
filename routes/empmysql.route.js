const express = require('express');
const router = express.Router();
const empcontroller = require('../controllers/mysql/emp.controller');
router.get('/', empcontroller.show);
router.post('/', empcontroller.create);
router.put('/:eid', empcontroller.update);
router.delete('/:eid', empcontroller.delete);
module.exports = router;