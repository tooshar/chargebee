"use strict"

const mongoose = require('mongoose');
const customer = require('../modals/customer');

module.exports = {
    async postCustomerDetails (req,res){
        var newCustomer = new customer(req.body)
        newCustomer.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    },
    async getCustomerDetiails (req,res){
        // const user = await customer.find({})
        // res.json(user);
    }
}