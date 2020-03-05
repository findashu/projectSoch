module.exports.logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

module.exports.notFound = (req, res, next) => {
  res.status(400).send("Page Not Found");
};

module.exports.errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went Worng");
};
