const model = require("../models/model");

// post http://localhost:5000/api/categories

const create_categories = (req, res) => {
  const category = new model.categories({
    type: "Investment",
    color: "#FCBE44",
  });

  category.save((err) => {
    if (err) {
      res.status(400).json(`Message: Failed to create category ${err}`);
    } else {
      res.json(category);
      console.log(category);
    }
  });
};

// get http://localhost:5000/api/categories

const get_categories = async (req, res) => {
  let data = await model.categories.find({});

  let filter = data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );

  return res.json(filter);
};

// post http://localhost:5000/api/transaction

const create_transaction = (req, res) => {
  const transaction = new model.transaction({
    name: "Mobile bill",
    type: "Expense",
    amount: 300,
  });

  transaction.save((err) => {
    if (err) {
      res.status(400).json(`Failed to create transaction: ${err}`);
    } else {
      res.json(transaction);
      console.log(transaction);
    }
  });
};

// get http://localhost:5000/api/transaction

const get_transaction = async (req, res) => {
  const data = await model.transaction.find({});

  res.json(data);
};

module.exports = {
  create_categories,
  get_categories,
  create_transaction,
  get_transaction,
};
