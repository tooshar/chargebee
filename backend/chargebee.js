'use strict';

const chargebee = require('chargebee');

module.exports = {

    init() {
        chargebee.configure({
            site: "venturepactproject-test",
            api_key: "test_V7pA5NNdBC4Ja9KhHWXeUJTp8HzB4cdS1"
        })
    }
}