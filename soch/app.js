const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const ptp = require("pdf-to-printer");
const dateformat = require("date-format");

const middleware = require("./middleware/appmiddleware");
const routes = require("./routes/index");
const requestRouter = require("./routes/requestRoutes");
const manualbillRouter = require("./routes/manualbillRoutes");
const alterationRouter = require("./routes/alterationRoutes");

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
app.use("/alterationdetails", alterationRouter);

app.get("/", routes.index);
// app.get("/chat", routes.chat);

app.use(middleware.notFound);
app.use(middleware.errorhandler);

app.listen(3004, () => console.log("Server is up in the port 3004"));
