module.exports = function(app) {
  let controller = require('./controllers/Controller');

  // todoList Routes
  // app.route('/products')
  //   .get(controller.get)
  //   .post(controller.store);

  // app.route('/products/:productId')
  //   .get(controller.detail)
  //   .put(controller.update);

  app.route('')
    .post(controller.post)
    .get(controller.get);
};
