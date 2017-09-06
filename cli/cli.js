'use strict';

const { argv: [,,func, ...args] } = process //+
const { obj } = require('./lootbag.js'); //+

if (func){ //+
    console.log("func", func);
    obj[func](args);
};