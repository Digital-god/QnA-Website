//Requiring Express
const express = require("express");
const app = express();
const path = require("path");
const engine = require("ejs-mate");

//Setting view engine as ejs and setting Default path to views for ejs temp files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Setting up the views directory
app.use(express.static(path.join(__dirname, "public")));
// Setting up the engine which is imported as ejs mate to ejs
app.engine("ejs", engine);

//All Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/tags", (req, res) => {
  res.render("tags");
});

app.get("/new_question", (req, res) => {
  res.render("newQuestion");
});

app.get("*", (req, res) => {
  res.send("BAD REQUEST");
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});
