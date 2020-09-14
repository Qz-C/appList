const express = require('express');
const routes = express.Router();

const productController = require('./controllers/productController');

routes.get('/products' , productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);
routes.get('/search/:title', productController.search);

module.exports = routes;