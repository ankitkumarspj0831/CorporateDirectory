const { response } = require("express");
const Employee = require("../models/Employee");

exports.addEmployee = (req, res, next) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
  });
  employee
    .save()
    .then((result) => {
      console.log("Employee data saved to the database.");
    })
    .catch((err) => {
      console.log("Error saving employee data in the database.");
      console.log("Error: " + err);
    });
    next();
};
