const express = require("express");
const hbs = require("hbs");

const middleware = require("./middleware/appmiddleware");
const routes = require("./routes/index");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(middleware.logger);

app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", routes.index);

app.get("/usermasterdetails", routes.master);
app.get("/departmentdetails", routes.department);

app.get("/newusermaster/create-new", routes.newMaster);
app.get("/newdepartment/create-new", routes.newDepartment);

app.post("/newdepartment/create-new", routes.doNewDepartment);
app.post("/newusermaster/create-new", routes.doNewMaster);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(3006, () => console.log("HO Server is running port 3006"));
