const { assert: { equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { populate } = require('../cli/lootbag.js');

describe("lootbag", () => {
    describe('populate', () => {
        it('should be a func', () => {
            isFunction(populate);
        });
    });

    describe('promisefunc', () => {
        it('should be a func', () => {
            return promisefunc()
            .then( (data) => {
                isArray(data);
            });
        });
    });

});