const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alterationSchema = new Schema({
  customername: String,
  customernumber: Number,
  alias: String,
  billno: String,
  billdate: {
    type: Date
  },
  duedate: Date,
  icode: String,
  icode1: String,
  qty: Number,
  qty1: Number,
  value: Number,
  value1: Number,
  totalqty: Number,
  totalvalue: Number,
  lparticulars: String,
  cparticulars: String,
  wparticulars: String,
  hparticulars: String,
  shparticulars: String,
  slparticulars: String,
  armparticulars: String,
  ndparticulars: String,
  bdparticulars: String,
  fdparticulars: String,
  bottomparticulars: String,
  remarks: String,
  authorisedby: String,
  authoriseddate: Date,
  createdOn: {
    type: Date,
    default: Date.now()
  },
  updatedOn: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("alteration", alterationSchema);