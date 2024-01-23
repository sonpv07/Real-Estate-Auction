const express = require("express");
const {
  getAllRealEstate,
  getRealEstateByID,
  getRealEstateByStatus,
  uploadPDF,
  uploadImages,
  getRealEstateByType,
  createNewRealEstate,
} = require("../controller/real-estate.controller");

const router = express.Router();
router.get("/", getRealEstateByStatus);
router.get("/", getAllRealEstate);
router.get("/", getRealEstateByType);
router.get("/:id", getRealEstateByID);

router.post("/", createNewRealEstate);

// UPLOAD PDF AND IMAGE
router.post("/uploadPDF", uploadPDF);
router.post("/uploadImages", uploadImages);

module.exports = router;
