'use strict';

const sqlite3 = require('sqlite3').verbose();
const { kiddos } = require('./kiddos.js');
const { toys } = require('./toys.js');
// const { argv: [,,func, ...args] } = process //+
const { toy, kid } = require('./parse-args');
const obj = {}; //+


const db = new sqlite3.Database('lootbag.sqlite', (err) => {
    console.log('connected');
    require ('./createTable.js')()
    .then( () => {
        // populate();
    })
});

const populate = () => {
    kiddos.forEach((obj) => {
        db.run(`INSERT INTO kiddos VALUES (${obj.id}, '${obj.name}')`);
    });
    toys.forEach((obj) => {
        db.run(`INSERT INTO toys VALUES (${obj.id}, '${obj.toy}', '${obj.delivered}')`);
    });
};

obj.delivered = (arg) => {
// const delivered = (arg) => {        
    console.log("delivered?", arg);
    db.all(`UPDATE list
            SET delivered = "true"
            WHERE list.name = '${arg[1]}'`,
        (err, data) => {
            console.log("winner", data);
        });
            
};

obj.add = (arg) => {
// const add = (arg) => {
    console.log("add?", arg);
    console.log(`${arg[0]}`);

    setTimeout( () => {
        db.run(`INSERT INTO list VALUES ('${arg[1]}', '${arg[0]}', 'false')`);
    }, 500);
};

obj.remove = (arg) => {
// const remove = (arg) => {    
    console.log(`${arg[1]} has been naughty`);
    db.all(`DELETE FROM list
            WHERE list.name = '${arg[1]}'`,
        (err, data) => {
            console.log("bad", data);
        });
};


//THIS ALLOWS THE FUNCTIONS TO BE CALLED FROM COMMAND LINE
// if (func === "-R"){ //+
//     return
//     } else {
//     console.log("func", func);
//     obj[func](args);
// };

module.exports = { populate, obj };
