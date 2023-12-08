const employeeModel = require("../models/employee");

const EmployeeController = {
  add: async (req, resp) => {
    let responseadd = await employeeModel.addEmp(req, resp);
    console.log(responseadd, "its model response");
    resp.send({ responseadd });
  },
  remove: (req, resp) => {
    const response = employeeModel.removeEmp(req, resp);
    console.log("remove its model response");
    resp.send({});
  },
  fetchEmp: async (req, resp) => {
    let responsefetch = await employeeModel.fetchEmp(req, resp);
    console.log("fetch its model response");
    resp.send({ responsefetch });
  },
};

module.exports = EmployeeController;
