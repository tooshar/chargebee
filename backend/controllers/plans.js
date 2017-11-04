"use strict"

const mongoose = require('mongoose');
const chargebee = require('chargebee');
const Plan = require('../modals/plans');

module.exports = {
    async postPlanDetails(req, res) {
        var plan = chargebee.plan.create(req.body).request()
        // let plan_response = await Plan.create(plan_body);
        res.json(plan)

    },
    async getPlanDetiails(req, res) {
        // const user = await customer.find({})
        // res.json(user);
    }
}