/* global require, describe, it */

var arrayUtils = require('../../src/js/Utils/arrayUtils');

describe('arrayUtils', function() {
    describe('areEqual', function() {
        it('should return true on arrays of same strings', function() {
            var first = ['one', 'two', 'three'],
                second = ['one', 'two', 'three'];

            arrayUtils.areEqual(first, second).should.be.true;
        });

        it('should return false on arrays of different strings', function() {

        });
    });
});
