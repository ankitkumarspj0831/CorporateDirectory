const Employee = require("../models/Employee");

exports.getEmployees = (req, res, next) => {
  Employee.find()
    .sort({ createdAt: "desc" })
    .then((employees) => {
      res.json({ data: employees });
    })
    .catch((err) => {
      console.log(err);
    });
};
