module.exports.logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

module.exports.notFound = (req, res) => {
  res.status(404).send("Page not found");
};

module.exports.errorhandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something Went Worng");
};
