const HTTP = require("../HTTP/HttpStatusCode");
const accountModel = require("../models/account.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const EXCEPTIONS = require("../exceptions/Exceptions");
const { validationResult } = require("express-validator");
const validator = require("validator");

// CREATE NEW TOKEN FOR USER
const generateUserToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };

  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  jwt.sign(payload, jwtSecretKey, { expiresIn: "1h" });
};

// REGISTER
const registerAccount = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    let checkExistUser = await accountModel.findOne({ email });

    if (checkExistUser)
      return res
        .status(HTTP.BAD_REQUEST)
        .json({ error: EXCEPTIONS.USER_HAS_EXIST });

    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let account = new accountModel({
      email,
      firstName,
      lastName,
      phoneNumber,
      password: hashedPassword,
    });

    await account.save();

    const token = generateUserToken(account);

    res.status(200).json({
      success: true,
      accountInfor: account,
    });
  } catch (error) {
    console.log(error);
  }
};

// LOGIN
const loginAccount = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await accountModel.findOne({ email });

    if (!user)
      return res.status(HTTP.BAD_REQUEST).json({
        success: false,
        error: EXCEPTIONS.WRONG_EMAIL_PASSWORD,
      });

    const checkValidPassword = await bcrypt.compare(password, user.password);

    if (!checkValidPassword)
      return res.status(HTTP.BAD_REQUEST).json({
        success: false,
        error: EXCEPTIONS.WRONG_EMAIL_PASSWORD,
      });

    // CREATE NEW TOKEN FOR USER
    generateUserToken(user);

    res.status(HTTP.OK).json({
      success: true,
      userInfor: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerAccount, loginAccount };
