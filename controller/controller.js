const model = require("../models/model");

// post http://localhost:5000/api/categories

const create_categories = async (req, res) => {
  const create = new model.categories({
    type: "Investment",
    color: "#FCBE44",
  });

  await create.save((err) => {
    if (!err) res.json(create);
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` });
  });
};

const get_categories = async(req, res) => {
  let data = await model.categories.find({})

  let filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color}));
  return res.json(filter);
}

module.exports = {
  create_categories,
  get_categories
};
