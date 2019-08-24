const express = require('express');
const assetRouter = require('./asset');

const api = express();

api.use('/asset/', assetRouter);

module.exports = api;