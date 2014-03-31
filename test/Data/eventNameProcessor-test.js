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
        var processor = new eventNameProcessor.EventNameProcessor();
        
        it("should require at least one user", function() {
            var testData = [];
            should(function() { processor.getEventNames(testData); }).throw(/one user/);
        });
        
        it('should return an array', function() {
            var testData = dataFactory.create('standard');
            processor.getEventNames(testData).should.be.an.instanceOf(Array);
        });
        
        it('should return a list of correct names', function() {
            var testData = dataFactory.create('standard'),
                eventNames = processor.getEventNames(testData);
            eventNames.should.containDeep([
                'first.thing',
                'second.thing',
                'third.thing',
                'fourth.thing',
                'fifth.thing'
            ]);
        });
        
        it('should throw if event names are inconsistent across users', function() {
            var testData = dataFactory.create('standard', {
                0: {
                    'one.more.thing': 10
                }
            });
            should(function() {
                processor.getEventNames(testData);
            }).throw(/names must match/);
        });
    });
});
