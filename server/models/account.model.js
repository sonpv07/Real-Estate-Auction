const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  email: { type: String, minLength: 5, require: true },
  firstName: { type: String, minLength: 2, require: true },
  lastName: { type: String, minLength: 2, require: true },
  phoneNumber: { type: String, minLength: 10, require: true },
  password: { type: String, minLength: 5, require: true },
});

const accountModel = mongoose.model("Account", accountSchema);

module.exports = accountModel;
