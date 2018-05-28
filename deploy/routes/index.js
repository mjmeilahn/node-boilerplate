const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');
const { catchErrors } = require('../handlers/errorHandlers');


// Homepage
router.get('/', routeController.index); 








module.exports = router;

