const Manualbill = require("../models/manualbillModel");

module.exports.getManualbill = () => {
  return new Promise((resolve, reject) => {
    Manualbill.find()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

module.exports.createManualbill = bd => {
  return new Promise((resolve, reject) => {
    let manual = new Manualbill(bd);
    console.log(manual);

    manual
      .save()

      .then(dt => resolve(dt))

      .catch(err => reject(err));
  });
};
