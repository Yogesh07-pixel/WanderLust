const express = require("express");
const app = express();
const Listing = require("./models/listing");
const index = require("./init/index");
const path = require("path");

const Port = 4000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello From the server");
});

//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return res.status(404).send("Listing not found");
  }
  res.render("listings/show", { listing });
});

//Create Route
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

app.listen(Port, (req, res) => {
  console.log("App is listening on the Port : ", Port);
});
