'use strict';
const customer = require('../../controllers/customer')

module.exports = [
    {
        method: 'post',
        path: '/customer',
        controllers: [customer.postCustomerDetails]
    },

    // {
    //    method: 'get',
    //    path: '/customer',
    //    controllers: [customer.getCustomerDetails]
    // }
];