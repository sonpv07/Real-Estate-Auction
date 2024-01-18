const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

const port = parseInt(process.env.PORT) || 5000;

const router = express.Router();

app.listen(port, (req, res) => {
  console.log(`Listen port: ${port}`);
});
