const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 5000;

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`Hello , ${req.session.name}`);
});
// app.get("/test", (req, res) => {
//   res.send("Test successfull");
// });

app.listen(PORT, (req, res) => {
  console.log("App is listening on the Port :", PORT);
});
