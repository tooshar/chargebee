'use strict';
const plan= require('../../controllers/plans')

module.exports = [
    {
        method: 'post',
        path: '/plan',
        controllers: [plan.postPlanDetails]
    },
];
