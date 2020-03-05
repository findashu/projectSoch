const router = require("express").Router();
const ManualbillService = require("../services/manualbillService");

router.get("/", function(req, res, next) {
  ManualbillService.getManualbill()
    .then(dt => {
      res.render("manualbill/billdetails", {
        title: "Manual Bill Details",
        manualbill: dt
      });
    })
    .catch(err => next(err));
});

router.get("/manualbill/create-new", function(req, res) {
  res.render("manualbill/bill", {
    title: "Craete New Bill"
  });
});

router.post("/manualbill/create-new", function(req, res, next) {
  let bodydata = req.body;
  // console.log(bodydata);

  ManualbillService.createManualbill(bodydata)
    .then(dt => {
      res.redirect("/billdetails");
    })
    .catch(err => next(err));

  // ManualbillService.createManualbill();
});

module.exports = router;
