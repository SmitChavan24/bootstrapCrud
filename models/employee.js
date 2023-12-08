const Employee = require('../schemas/Employee')
const uuid = require('uuid')

const addEmp = async(req,data) => { 
 console.log("in model add",req.body)
 let employee = await new Employee({
    _id: uuid.v4(),
    fullname: req.body.fullname,
    gender: req.body.gender,
    age: req.body.age,
    phone: req.body.phone,
    email:req.body.email,
    accountno:req.body.accountno,
    salary:req.body.salary,
  });

  const EmployeeRes = await employee.save();
    return EmployeeRes
}
const removeEmp = async(req,data) => { 
    console.log("in model add",req.body)
    return 3
}
const fetchEmp = async (req,data) => { 
    console.log("in model fetch",req.body)
    let GetEmployee = await Employee.find({});
    return GetEmployee
}


module.exports={addEmp,removeEmp,fetchEmp}