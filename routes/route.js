const routes = require("express").Router();
const controller = require('../controller/controller')

routes.route("/api/categories").get(controller.create);

module.exports = routes