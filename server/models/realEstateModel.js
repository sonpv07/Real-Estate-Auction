const mongoose = require("mongoose");

const realEstateSchema = new mongoose.Schema({
  bedRoom: { type: Number, min: 0 },
  bathRoom: { type: Number, min: 0 },
  size: { type: Number, min: 10 },
});

const realEstateModel = mongoose.model("Real-Estate", realEstateSchema);

module.exports = realEstateModel;
