'use strict';

module.exports = (argsArr) => {
    console.log("argar", argsArr)
    const list = {};
    list.toy = argsArr[1] ? argsArr[0] : null;
    list.kid = argsArr[1] || argsArr[0] ;
    console.log("list", list);
    return list
};