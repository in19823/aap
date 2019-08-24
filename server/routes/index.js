const express = require('express');
const router = express.Router();

const message = {
    'message': "Hello, I'm an audio player"
}

router.get('/', (req, res, next) => {
    res.json(message);
});

module.exports = router;