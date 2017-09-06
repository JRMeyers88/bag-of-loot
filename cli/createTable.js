'use strict';

const sqlite3 = require('sqlite3').verbose();

module.exports = () => {
    return new Promise( (resolve, reject) => {
        const db = new sqlite3.Database('lootbag.sqlite', (err) => {
            // db.run('DROP TABLE IF EXISTS kiddos');
            // db.run('DROP TABLE IF EXISTS toys'); 
            // db.run('DROP TABLE IF EXISTS list');                        
            // db.run('CREATE TABLE IF NOT EXISTS kiddos (id INT, name TEXT)', () => {
            //     console.log('made kiddos?');
            //     // resolve();
            // });
            // db.run('CREATE TABLE IF NOT EXISTS toys (id INT, toy TEXT, delivered BOOLEAN)', () => {
            //     console.log('made toys?');
            //     // resolve();
            // });
            
            db.run('CREATE TABLE IF NOT EXISTS list (name TEXT, toy TEXT, delivered TEXT)', () => {
                console.log('made list?');
                resolve();
            });
        });
    })
};
