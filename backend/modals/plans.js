'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema(
    {
        id:{
            type: String,
            // required: true,
            // unique: true,
            // trim: true
        },

        name:{
            type: String,
            // required: true,
            // trim: true,
            // minlength: 3,
        },

        description:{
            type: String,
            default: null
        },

        price:{
            type: Number,
            default: 0
        },

        active:{
            type: Boolean,
            default: false 
        }
    },
    {
        timestamps: true,
        versionKey: false,
        autoIndex: true
    }

);

module.exports = mongoose.model('plan',PlanSchema);