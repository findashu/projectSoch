module.exports.index = (req, res) => {
  res.render("index");
};

module.exports.master = (req, res) => {
  res.render("master/usermaster/usermasterdetails", {
    title: "Master Details"
  });
};

module.exports.department = (req, res) => {
  res.render("master/department/departmentdetails", {
    title: "Department Details"
  });
};

module.exports.newMaster = (req, res) => {
  res.render("master/usermaster/newusermaster", {
    title: "New Master"
  });
};

module.exports.newDepartment = (req, res) => {
  res.render("master/department/newdepartment", {
    title: "New Department"
  });
};

module.exports.doNewMaster = (req, res) => {
  let bodydata = req.body;
  console.log(bodydata);

  res.redirect("/usermasterdetails");
};

module.exports.doNewDepartment = (req, res) => {
  let bodydt = req.body;
  console.log(bodydt);

  res.redirect("/departmentdetails");
};
