const routes = require("express").Router();
const controller = require("../controller/controller");

routes
  .route("/api/categories")
  .post(controller.create_categories)
  .get(controller.get_categories);

routes
  .route("/api/transaction")
  .post(controller.create_transaction)
  .get(controller.get_transaction);

module.exports = routes;
