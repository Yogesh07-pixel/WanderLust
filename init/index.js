const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66e2e949c8af6833b2d01f50",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized");
};

initDB();
