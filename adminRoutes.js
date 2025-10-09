const express = require('express');
const router = express.Router();
const { getAllFeedback } = require('../controllers/adminController');

router.get('/feedbacks', getAllFeedback);

module.exports = router;
