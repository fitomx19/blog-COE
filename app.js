const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();


// settings
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRoutes = require("./routes/index");
//static files

//Habilitar express.json
app.use(express.json({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));


// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// routes
app.use("/", indexRoutes);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});