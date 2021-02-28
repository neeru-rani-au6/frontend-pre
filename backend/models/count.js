var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Count = new Schema(
  {
    count: Number,
    type: String
  },
  { timestamps: true }
);

var Count = mongoose.model("Count", Count);

module.exports = Count;
