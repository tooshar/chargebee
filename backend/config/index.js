'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes')
// const router = require('./routes');

const self = module.exports = {
    configureApp (app) {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());
        return self;
    },

    configureRoutes (app) {
        app.use('/',router);
        return self;
    }
}