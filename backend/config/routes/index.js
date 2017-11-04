const express = require('express');
const Router = express.Router();

const routes = [
 ...require('./customer'),
 ...require('./plans')
]

routes.forEach(route => {
    // Router.get('/admin', [()=>{}, ()=>{}]);
    Router[route.method](route.path, route.controllers);
})

module.exports = Router;