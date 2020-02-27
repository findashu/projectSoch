const router = require("express").Router();

router.get("/", function(req, res) {
  res.render("manualbill/billdetails", {
    title: "Manual Bill Details"
  });
});

router.get("/manualbill/create-new", function(req, res) {
  res.render("manualbill/bill", {
    title: "Craete New Bill"
  });
});

router.post("/manualbill/create-new", function(req, res) {
  let bodydata = req.body;
  console.log(bodydata);

  res.redirect("/billdetails");
});

module.exports = router;
