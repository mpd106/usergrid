/* global require, describe, it */

var should = require('../lib/should');
var dummyEventNameProcessor = require('./dummyEventNameProcessor'),
    dummy = new dummyEventNameProcessor.DummyEventNameProcessor();
var usageData = require('../../src/js/data/usageData')(dummy);
var dataFactory = require('../Factories/usageDataFactory');

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
    });
    
    describe('getEventNames', function() {
        it('should return an array', function() {
            var testData = dataFactory.create('standard');
            var usage = new usageData.UsageData(testData);
            usage.getEventNames().should.be.an.instanceOf(Array);
        });
    });
});