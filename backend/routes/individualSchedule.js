const router = require("express").Router();
let IndividualSchedule = require("../models/individualSchedule.model");


router.route("/").get((req, res) => {
  IndividualSchedule.find()
    .then((individualSchedule) => res.json(individualSchedule))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/add").post((req, res) => {
  const sID = req.body.sID;
  const dateTimeFrom = req.body.dateTimeFrom;
  const dateTimeTo = req.body.dateTimeTo;
  const employee = req.body.employee;
  const monthlySchedule = req.body.monthlySchedule;
 

  

  const newIndividualSchedule = new IndividualSchedule({
    sID,
    dateTimeFrom,
    dateTimeTo,
    employee,
    monthlySchedule,
    
  });

  newIndividualSchedule
    .save()
    .then(() => res.json("individual schedule added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route('/:id').delete((req, res) => {
  IndividualSchedule.findByIdAndDelete(req.params.id)
    .then(() => res.json('data deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  IndividualSchedule.findById(req.params.id)
    .then(individualSchedule => {
      individualSchedule.sID = req.body.sID;
      individualSchedule.dateTimeFrom = req.body.dateTimeFrom;
      individualSchedule.dateTimeTo = req.body.dateTimeTo;
      individualSchedule.employee = req.body.employee;
      individualSchedule.monthlySchedule = req.body.monthlySchedule;


      individualSchedule.save()
        .then(() => res.json('employee duty updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  IndividualSchedule.findById(req.params.id)
    .then(individualSchedule => res.json(individualSchedule))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
