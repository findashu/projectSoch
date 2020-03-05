const router = require("express").Router();
const RequestService = require("../services/requestService");

router.get("/", function(req, res, next) {
  RequestService.getRequest()
    .then(dt => {
      res.render("request/request", {
        title: "Support Request Details",
        request: dt
      });
    })
    .catch(err => next(err));
});

router.get("/request/create-new", function(req, res) {
  res.render("request/newRequest", {
    title: "Support Request"
  });
});

router.post("/request/create-new", function(req, res, next) {
  let bodydata = req.body;
  bodydata.alias = bodydata.requestsubjects
    .split(" ")
    .join("-")
    .toLowerCase();

  RequestService.createRequest(bodydata)
    .then(dt => {
      res.redirect("/request");
    })
    .catch(err => next(err));

  RequestService.updateIdRequest(bodydata)
    .then(dt => {
      console.log("id updted");
    })
    .catch(err => next(err));
});

// router.post("/request/create-new", function(req, res, next) {
//     RequestService.updateIdRequest(id)
//     .then(dt => )
// })

router.get("/request/:alias", function(req, res, next) {
  let alias = req.params.alias;

  RequestService.requestDetails(alias)
    .then(dt => {
      res.render("request/requestDetails", {
        title: "Request Detail",
        request: dt
      });
    })
    .catch(err => next(err));
});

router.post("/request/:alias/update", function(req, res, next) {
  let alias = req.params.alias;
  let bodyData = req.body;

  bodyData.updatedOn = Date.now();

  RequestService.updateRequest(alias, bodyData)
    .then(dt => {
      console.log("Data updated");

      res.redirect("/request");
    })
    .catch(err => next(err));
});

module.exports = router;
