const router = require("express").Router();
let Month = require("../models/MonthlySchedule.model");


router.route("/").get((req, res) => {
  Month.find()
    .then((month) => res.json(month))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/add").post((req, res) => {
  const MID = req.body.MID;
  const month = req.body.month;
  const year = req.body.year;

  const newMonthlySchedule = new Month({
    MID,
    month,
    year,
    
  });

  newMonthlySchedule
    .save()
    .then(() => res.json("MonthlySchedule added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route('/:id').delete((req, res) => {
  Month.findByIdAndDelete(req.params.id)
    .then(() => res.json('monthly schedule deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Month.findById(req.params.id)
    .then(month => {
      month.MID = req.body.MID;
      month.month = req.body.month;
      month.year = req.body.year;

      month.save()
        .then(() => res.json('month updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Month.findById(req.params.id)
    .then(month => res.json(month))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
