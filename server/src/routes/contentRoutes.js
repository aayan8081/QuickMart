const express = require('express');
const { getHighlights } = require('../controllers/contentController');

const router = express.Router();

router.get('/', getHighlights);

module.exports = router;

