const express = require("express");
const { getAllRealEstate } = require("../controller/realEstateController");

const router = express.Router();

router.get("/", getAllRealEstate);

module.exports = router;
