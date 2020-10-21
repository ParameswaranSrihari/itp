const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    Empid: String,
    Name: String,
    Nic: String,
    Post: String,
    Units: String,
    Phone: String,
    Grade: String,
    },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
