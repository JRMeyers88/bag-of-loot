const { assert: { equal, isFunction, isObject, isArray } } = require('chai');
const { populate, obj:{ add, remove, delivered } } = require('../cli/lootbag.js');

describe("lootbag", () => {
    describe('populate', () => {
        it('should be a func', () => {
            isFunction(populate);
        });
    });

    describe('add', () => {
        it('should be a func', () => {
            isFunction(add);
        });
    });

    describe('remove', () => {
        it('should be a func', () => {
            isFunction(remove);
        });
    });

    describe('delivered', () => {
        it('should be a func', () => {
            isFunction(delivered);
        });
    });

    // describe('promisefunc', () => {
    //     it('should be a func', () => {
    //         return promisefunc()
    //         .then( (data) => {
    //             isArray(data);
    //         });
    //     });
    // });

});