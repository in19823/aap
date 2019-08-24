const express = require('express');
const asset = require('../controllers/asset');
const router = express.Router();

router.get('/', asset.list);
//router.get('/:id', asset.detail);
//router.post('/', asset.create);
//router.put('/:id', asset.update);
//router.delete('/:id', asset.delete);

module.exports = router;