const express = require('express');
const EmployeeController =require('../controller/employeeController')
const router = express.Router();
router.get('/addEmployee', EmployeeController.add);
router.get('/removeEmployee', EmployeeController.remove);
router.get('/fetchEmployee', EmployeeController.fetchEmp);
module.exports = router;