const router = require("express").Router();
const AlterationService = require("../services/alterationService");

router.get("/", function(req, res, next) {
  AlterationService.getAlteration()
    .then(dt => {
      res.render("alteration/alterationdetails", {
        title: "Alteration Details",
        alteration: dt
      });
    })
    .catch(err => next(err));
});

router.get("/alteration/create-new", function(req, res) {
  res.render("alteration/newalterationbill", {
    title: "Alteration Bill"
  });
});

router.post("/alteration/create-new", function(req, res, next) {
  let bodydata = req.body;
  // console.log(bodydata);
  bodydata.alias = bodydata.customername
    .split(" ")
    .concat(bodydata.customernumber)
    .join("-")
    .toLowerCase();

  AlterationService.createAlteration(bodydata)
    .then(dt => {
      res.redirect("/alterationdetails");
    })
    .catch(err => next(err));
});

router.get("/alteration/:alias", function(req, res, next) {
  let alias = req.params.alias;

  AlterationService.alterationDetails(alias)
    .then(dt => {
      res.render("alteration/newaltertiondetails", {
        title: "Alteration Details",
        alteration: dt
      });
    })
    .catch(err => next(err));
});

module.exports = router;
