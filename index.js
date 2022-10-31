const express = require("express");
const route = require('./routes/route')
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// using routes 
app.use(route);

// listen to the http server 
app.listen(PORT, () => {
  console.log(`Server is walking on port: ${PORT}`);
});
