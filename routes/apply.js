const express = require('express');

const router = express();

const controlApply = require('../controllers/apply');

router.get('/', controlApply.getApply );

router.post('/', controlApply.postApply);

module.exports = router;