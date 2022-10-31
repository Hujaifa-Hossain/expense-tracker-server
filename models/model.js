const mongoose = require("mongoose");

const { Schema } = mongoose;

const categories_model = new Schema({
  name: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});

const categories = mongoose.model("categories", categories_model);

module.exports = { categories };
