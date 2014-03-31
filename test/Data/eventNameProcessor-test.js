/* global require, describe, it */

var eventNameProcessor = require('../../src/js/Data/eventNameProcessor');
var dataFactory = require('../Factories/usageDataFactory');
var should = require('../lib/should');

describe('eventNameProcessor', function() {
    describe('constructor', function() {
        it('should exist', function() {
            should.exist(eventNameProcessor.EventNameProcessor);
        });
    });
    
    describe('getEventNames', function() {
        it('should return an array', function() {
            var processor = new eventNameProcessor.EventNameProcessor();
            var testData = dataFactory.create('standard');
            processor.getEventNames(testData).should.be.an.instanceOf(Array);
        });
        
        it('should return a list of correct names', function() {
            throw Error('not implemented');
        });
        
        it('should throw if event names are inconsistent across users', function() {
            throw Error('not implemented');
        });
    });
});
