const express = require('express');
const router = express.Router();
const validateRegistration = require('../middleware/validateRegistration');
const registrationController = require('../controllers/registrationController');

router.post('/', validateRegistration, registrationController.registerUser);

module.exports = router;
