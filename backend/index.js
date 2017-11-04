const express = require('express');
const mongoose = require('mongoose');
const app = express();
var chargebeeConfig = require('./chargebee');

const config = require('./config');

config
    .configureApp(app)
   .configureRoutes(app)

// chargebee.configure({
//     site: "your-site-69136547-test",
//     api_key: "test_V7pA5NNdBC4Ja9KhHWXeUJTp8HzB4cdS1"
// });

chargebeeConfig
        .init()


app.listen(3000, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server Started at port 3000");
    }
})

mongoose.connect("mongodb://user-chargebee:chargebee123@ds243345.mlab.com:43345/chargebee", err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Connected to Database')
    }
})



// app.listen(3000);