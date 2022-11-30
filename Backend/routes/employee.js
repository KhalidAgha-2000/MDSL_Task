var express = require('express');
var router = express.Router();
var controller = require('../controllers/employee')


/********Get Employee List */
router.get('/', controller.getEmployees)

/********Add Employee */
router.post('/add', controller.addEmployee)

/********Delete Employee`s Data */
router.delete('/:id', controller.deleteEmployee)

module.exports = router;
