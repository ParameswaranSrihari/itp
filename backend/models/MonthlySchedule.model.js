const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monthlySchduleSchema = new Schema(
  {
    MID: String,
    month: String,
    year: {
      type: String,
      enum:[

        "2020",
        "2021"
      ],
      default:"2020",
    
    },
  },
  { timestamps: true }
);

const Month = mongoose.model("Month", monthlySchduleSchema);
module.exports = Month;
