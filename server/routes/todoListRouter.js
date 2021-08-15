const express = require("express");
const { getToDoList } = require("../controllers/productController");
const router = express.Router();

//Public route for time being
// this (router.route("/").get(getToDoList)) is similar to: router.get("/", getToDoList);
router.route("/").get(getToDoList)

module.exports = router;
