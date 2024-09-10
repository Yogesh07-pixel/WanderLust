const express = require("express");
const router = express.Router();

//Index - Users
router.get("/", (req, res) => {
  res.send("GET for users");
});
//Show - Users
router.get("/:id", (req, res) => {
  res.send("GET for users");
});
//Post - Users
router.post("/", (req, res) => {
  res.send("POST for users");
});
//DELETE - Users
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;
