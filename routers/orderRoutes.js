const express = require('express');
const orderControllers = require('../controllers/orderControllers');
const router = express.Router();

router
    .get('/', orderControllers.getAllOrder)
    .post('/', orderControllers.createOrder);

router
    .get('/:id', orderControllers.getSingleUserOrder)
    .get('/user/:id', orderControllers.getAddressByUserOrder)

module.exports = router;
