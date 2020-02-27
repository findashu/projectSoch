const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");

const middleware = require("./middleware/appmiddleware");
const routes = require("./routes/index");
const requestRouter = require("./routes/requestRoutes");
const manualbillRouter = require("./routes/manualbillRoutes");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/projectsoch", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(cnected => {
    console.log("DB Connected");
  })
  .catch(err => console.log("Connection issuw with mongoDB"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(middleware.logger);

app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/request", requestRouter);
app.use("/billdetails", manualbillRouter);

app.get("/", routes.index);

app.get("/alterationdetails", routes.alterationdetails);

app.use(middleware.notFound);
app.use(middleware.errorhandler);

app.listen(3004, () => console.log("Server is up in the port 3004"));
