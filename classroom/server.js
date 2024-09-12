const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(flash());

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "Some error occurred");
  } else {
    req.flash("success", "user registered successfully!");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.render("page.ejs", { name: req.session.name });
});
// app.get("/test", (req, res) => {
//   res.send("Test successfull");
// });

app.listen(PORT, (req, res) => {
  console.log("App is listening on the Port :", PORT);
});
