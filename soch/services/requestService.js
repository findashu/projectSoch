const Request = require("../models/requestModel");

module.exports.getRequest = () => {
  return new Promise((resolve, reject) => {
    Request.find()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

module.exports.createRequest = bd => {
  return new Promise((resolve, reject) => {
    let request = new Request(bd);
    console.log(request);

    request
      .save()
      .then(dt => resolve(dt))
      .catch(err => reject(err));
  });
};

module.exports.updateIdRequest = id => {
  return new Promise((resolve, reject) => {
    Request.findByIdAndUpdate(
      { id: Object(id) },
      { new: true },
      { $set: Number, default: 1, $inc: { id: 1 } }
    )
      .then(dt => resolve(dt))
      .catch(err => reject(err));
  });
};

module.exports.requestDetails = alias => {
  return new Promise((resolve, reject) => {
    Request.findOne({ alias: alias })
      .then(dt => resolve(dt))
      .catch(err => reject(err));
  });
};

module.exports.updateRequest = (alias, data) => {
  return new Promise((resolve, reject) => {
    Request.findOneAndUpdate({ alias: alias }, { $set: data, $inc: { __v: 1 } })
      .then(dt => {
        resolve(dt);
      })
      .catch(err => reject(err));
  });
};
