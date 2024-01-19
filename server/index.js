// DEFINE LIBRARY
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// DEFINE DATABASE
const db = require("./config/database");

// DEFINE ROUTER
const realEstateRouter = require("./router/real-estate.router");
const accountRouter = require("./router/account.router");

// DEFINE EXPRESS
const app = express();
app.use(express.json());
app.use(cors());

// DEFINE PORT
const port = parseInt(process.env.PORT) || 5000;

// DEFINE ROUTER LINK
app.use("/", realEstateRouter);
app.use("/", accountRouter);

// CONNECT TO PORT
app.listen(port, (req, res) => {
  console.log(`Listen port: ${port}`);
});

// CONNECT DATABASE
db.connect();
