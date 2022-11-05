const express = require("express");
const cors = require("cors");
const route = require("./routes/route");
require("dotenv").config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(route);

const connection = require("./database/connection");

connection
  .then((db) => {
    if (!db) return process.exit(1);

    // listen to the http server
    app.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });

    app.on("error", (err) =>
      console.log(`Failed To Connect with HTTP Server : ${err}`)
    );
    // error in mondb connection
  })
  .catch((error) => {
    console.log(`Connection Failed...! ${error}`);
  });
