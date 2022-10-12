'use strict';
const productsCtrl = require("./controllers/ProductsController");
module.exports = function(app) {
  app.route('/read/single')
      .get(productsCtrl.readString512)

  app.route('/redis/insert')
      .get(productsCtrl.putToRedis)

  app.route('/redis/checkExist')
      .get(productsCtrl.checkKeyExist)
};
