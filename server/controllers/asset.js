const Asset = require('../models/asset');
const response = require('../helpers/response');
const mongoose = require('mongoose');

exports.list = (req, res) => {
    const query = req.query && req.query.lastId ? {'_id': {'$gt': req.query.lastId}} : {};
    const limit = req.query && req.query.limit ? parseInt(req.query.limit) : 10;
    try {
        //Dumb record insertion
        // const testData = {
        //  title: 'dumb',
  //           description: req.body.description,
  //           length: 0,
  //           url: '/dumb.mp3'
  //       };
        // const asset = new Asset(testData);
        // asset.save();
        Asset.find(query).limit(limit).then((result) => {
            return response.successResponse(res, '', result);
        }).catch((err) => {
            return response.errorResponse(res, err);
        });
    } catch (err) {
        return response.errorResponse(res, err);
    }
};