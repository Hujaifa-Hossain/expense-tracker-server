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
    if (!db) return process.exit[1];
    
    app.listen(PORT, () => {
      console.log(`Server is running on ort: http://localhost:${PORT}`);
    });

    app.on("error", (err) =>
      console.log(`Failed to connect with HTTP server : ${err}`)
    );
  })
  .catch((error) => {
    console.log(`Connection Failed ${error}`);
  });
