const express = require("express");
const {
  loginAccount,
  registerAccount,
} = require("../controller/account.controller");
const { registerValidator } = require("../validators/account.validator");

const router = express.Router();

router.get("/login", loginAccount);
router.post("/register", registerValidator, registerAccount);

module.exports = router;
