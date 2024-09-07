const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany();
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized");
};

initDB();
