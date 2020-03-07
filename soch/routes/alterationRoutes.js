const router = require("express").Router();
const Alteration = require('../models/alterationModel')
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

router.post("/alteration/create-new", async function(req, res, next) {
  let bodyData = req.body;
  // console.log(bodydata);
  // bodydata.alias = bodydata.customername
  //   .split(" ")
  //   .concat(bodydata.customernumber)
  //   .join("-")
  //   .toLowerCase();

  let preData = await Alteration.find().sort({_id:-1}).limit(1);
  console.log('preData ',preData)

  let billNo = `ABCD-${Number(preData[0].billno.split('-')[1])+1}`;
    
  // bodyData.billno = `ABCD-${billNo}`;
  bodyData.billno = billNo
  AlterationService.createAlteration(bodyData)
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
