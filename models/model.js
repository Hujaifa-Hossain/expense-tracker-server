const mongoose = require("mongoose");

const { Schema } = mongoose;

const categories_model = new Schema({
  name: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});

const transaction_model = new Schema({
  name: {type: String, default: 'Anonymous'},
  type: {type: String, default: 'Investment'},
  date: {type: Date, default: Date.now},
  amount: {type: Number},
})

const categories = mongoose.model("categories", categories_model);
const transaction = mongoose.model('transaction', transaction_model);

exports.default = transaction
module.exports = { categories, transaction };
