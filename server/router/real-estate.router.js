const express = require("express");
const { getAllRealEstate } = require("../controller/real-estate.controller");

const router = express.Router();

router.get("/", getAllRealEstate);

module.exports = router;
