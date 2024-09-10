const express = require("express");
const app = express();
const users = require("./routes/user");
const posts = require("./routes/post");
const PORT = 5000;

// //Middleware
// app.use(cookieParser("secretcode"));

// //Singed Cookie
// app.get("/getsignedcookie", (req, res) => {
//   res.cookie("made-In", "California", { signed: true });
//   res.send("Signed cookie sent.");
// });
// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "namaste");
//   res.cookie("madeIn", "India");
//   res.send("Sent you some cookie.");
// });

// app.get("/request", (req, res) => {
//   let { price = "anonymous", name = "anonymous" } = req.cookies;
//   res.send(
//     `Hello ${name}! Bhai please ${price} rupee bhejde taki me Library me jake Padh saku...`
//   );
// });
// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("Hello I am Root!");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(PORT, (req, res) => {
  console.log("App is liestening on the Port :", PORT);
});
