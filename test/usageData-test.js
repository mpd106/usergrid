/* global require, describe, it */

var should = require('./lib/should');
var usageData = require('../src/js/usageData');
var usageDataFactory = require('./Factories/usageDataFactory');

describe('usageData', function() {
    var testData = [{
        'first.thing':      3,
        'second.thing':     5,
        'third.thing':      100,
        'fourth.thing':     15,
        'fifth.thing':      17
    }, {
        'first.thing':      9,
        'second.thing':     4,
        'third.thing':      80,
        'fourth.thing':     24,
        'fifth.thing':      11
    }, {
        'first.thing':      15,
        'second.thing':     19,
        'third.thing':      134,
        'fourth.thing':     67,
        'fifth.thing':      9
    }];
    
    describe('constructor', function() {
        it('should exist', function() {
            should.exist(usageData.UsageData);
        });
        
        it('should throw if new is omitted', function() {
            should(function() { usageData.UsageData(testData); }).throw(/new/);
        });
        
        it("should require at least one user", function() {
            var testData = [];
            should(function() { new usageData.UsageData(testData); }).throw(/one user/);
        });

        it("should throw if event names don't match", function() {
            testData[0]['one.more.thing'] = 10;
            should(function() {
                new usageData.UsageData(testData);
            }).throw(/event names/);
        });
    });
    
    describe('getEventNames', function() {
        it('should return an array', function() {
            var usage = new usageData.UsageData(testData);
            usage.getEventNames().should.be.an.instanceOf(Array);
        });
    });
});