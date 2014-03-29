/* global require, describe, it */

var should = require('./lib/should');
var usageData = require('../src/js/usageData');

describe('usageData', function() {
    describe('constructor', function() {
        it('should exist', function() {
            should.exist(usageData.UsageData);
        });
        
        it('should throw if new is omitted', function() {
            should(function() { usageData.UsageData(); }).throw(/new/);
        });
    });
});