const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  department: String,
  requestsubjects: String,
  description: String,
  createdOn: {
    type: Date,
    default: Date.now()
  },
  updatedOn: {
    type: Date,
    default: Date.now()
  },
  alias: {
    type: String,
    required: true,
    unique: true
  },
  reqid: {
    type: String,
    default: "SOCH"
  }
});

module.exports = mongoose.model("request", requestSchema);
