const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const App = express();

//Db Connection
require("../Config/DB_Connection");

//Midlewares
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());
App.use(helmet());

// TODO Routes

//Server Start
App.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
