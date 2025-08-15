const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const paymentController = require('../controllers/paymentController');

router.post('/', checkAuth, paymentController.processPayment);

module.exports = router;
