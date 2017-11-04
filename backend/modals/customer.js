const mongoose = require('mongoose');
const express = require('express');

var customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        // required: true,
        // unique: true,
        // trim: true
    },
    password: {
        type: String,
        // required: true
    },
    // role:{
    //     type: String,
    //     required: true
    // },
    email:{
        type: String,
        // required: true,
        // unique: true,
        // trim: true
    }
})

module.exports = mongoose.model('customer', customerSchema);