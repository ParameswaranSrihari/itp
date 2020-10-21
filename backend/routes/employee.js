const router = require("express").Router();
let Employee = require("../models/employee.model");

//get all patients
router.route("/").get((req, res) => {
  Employee.find()
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/add").post((req, res) => {

  const Empid = req.body.empid;
  const Name = req.body.name;
  const Nic = req.body.nic;
  const Post = req.body.post;
  const Units = req.body.units;
  const Phone = req.body.phone;
  const Grade = req.body.grade;

  const newEmployee = new Employee({
    Empid,
    Name,
    Nic,
    Post,
    Units,
    Phone,
    Grade,
  });

  newEmployee
    .save()
    .then(() => res.json("Employee added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route('/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('data deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
      employee.Empid = req.body.empid;
      employee.Name = req.body.name;
      employee.Nic = req.body.nic;
      employee.Post = req.body.post;
      employee.Units = req.body.units;
      employee.Phone = req.body.phone;
      employee.Grade = req.body.grade;

      employee.save()
        .then(() => res.json('employee updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
