const express = require('express');

const router = express();

const controlHire = require('../controllers/hire');

router.get('/', controlHire.getHire);

router.post('/', controlHire.postHire);

module.exports = router;