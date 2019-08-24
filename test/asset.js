process.env.NODE_ENV = 'test';

const Asset = require('../server/models/asset');
const response = require('../server/helpers/response');
const mongoose = require('mongoose');

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('/GET asset list', () => {
    it('it should GET a list of asset, default page 1, 10 items', (done) => {
        chai.request(app).get('/api/asset/').then(function(res) {
            expect(res).to.have.status(200);
            expect(res.body.success).to.equal(true);
            done();
      });
    });
});