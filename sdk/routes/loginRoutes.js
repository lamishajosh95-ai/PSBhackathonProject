const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const validateLoginPayload = require('../middleware/validateLoginPayload');

router.post('/', validateLoginPayload, loginController.verifyLogin);

module.exports = router;
