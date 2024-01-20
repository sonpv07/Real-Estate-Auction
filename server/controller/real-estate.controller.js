const HttpStatusCode = require("../HTTP/HttpStatusCode");
const Exceptions = require("../exceptions/Exceptions");
const realEstateModel = require("../models/real-estate.model");

const getAllRealEstate = async (req, res) => {
  const result = await realEstateModel.find({});
  if (result.length > 0) {
    res.status(HttpStatusCode.OK).json(result);
  } else {
    res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ error: Exceptions.FAIL_TO_GET_ITEM });
  }
};

const getRealEstateByID = async (req, res) => {
  const { _id } = req.body;
  const result = await realEstateModel.findOne({ _id });
  if (result.length > 0) {
    res.status(HttpStatusCode.OK).json(result);
  } else {
    res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ error: Exceptions.FAIL_TO_GET_ITEM });
  }
};

module.exports = { getAllRealEstate, getRealEstateByID };
