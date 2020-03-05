const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manualbillSchema = new Schema({
  customername: String,
  customernumber: Number,
  reason: String,
  alias: String,
  icode: String,
  qty: Number,
  rspvalue: Number,
  discount: Number,
  value: Number,
  totalqty: Number,
  totalvalue: Number
});

module.exports = mongoose.model("manualbill", manualbillSchema);
