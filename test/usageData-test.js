/* global require, describe, it */

var should = require('./lib/should');
var usageData = require('../src/js/usageData');
var dataFactory = require('./Factories/usageDataFactory');

describe('usageData', function() {
    describe('constructor', function() {
        it('should exist', function() {
            should.exist(usageData.UsageData);
        });
        
        it('should throw if new is omitted', function() {
            should(function() {
                usageData.UsageData(dataFactory.create('standard'));
            }).throw(/new/);
        });
        
        it("should require at least one user", function() {
            var testData = [];
            should(function() { new usageData.UsageData(testData); }).throw(/one user/);
        });

        it("should throw if event names don't match", function() {
            var testData = dataFactory.create('standard', {
                0: {
                       'one.more.thing': 10
                }
            });
            should(function() {
                new usageData.UsageData(testData);
            }).throw(/event names/);
        });
    });
    
    describe('getEventNames', function() {
        it('should return an array', function() {
            var testData = dataFactory.create('standard');
            var usage = new usageData.UsageData(testData);
            usage.getEventNames().should.be.an.instanceOf(Array);
        });
    });
});