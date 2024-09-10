const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
  res.send("GET for posts");
});
//Show - Users
router.get("/", (req, res) => {
  res.send("GET for show posts");
});
//Post - Users
router.post("/", (req, res) => {
  res.send("POST for posts");
});
//DELETE - Users
router.delete("/:id", (req, res) => {
  res.send("DELETE for post id");
});

module.exports = router;
