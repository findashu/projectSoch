const Alteration = require("../models/alterationModel");

module.exports.getAlteration = () => {
  return new Promise((resolve, reject) => {
    Alteration.find()
      .then(data => resolve(data))
      .catch(err => resolve(err));
  });
};

module.exports.createAlteration = bd => {
  return new Promise((resolve, reject) => {
    let alteration = new Alteration(bd);
    console.log(alteration);

    alteration
      .save()
      .then(data => resolve(data))
      .catch(err => resolve(err));
  });
};

module.exports.alterationDetails = alias => {
  return new Promise((resolve, reject) => {
    Alteration.findOne({ alias: alias })
      .then(dt => resolve(dt))
      .catch(err => reject(err));
  });
};
