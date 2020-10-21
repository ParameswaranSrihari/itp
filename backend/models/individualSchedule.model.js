const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const individualScheduleSchema = new Schema(
  {
    sID: String,
    dateTimeFrom: String,
    dateTimeTo: String,
    employee: String,
    monthlySchedule: String,
    
    },
  { timestamps: true }
);

const IndividualSchedule = mongoose.model("IndividualSchedule", individualScheduleSchema);
module.exports = IndividualSchedule;
