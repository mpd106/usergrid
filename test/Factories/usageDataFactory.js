/* global require, module */

var mint = require('./mint'),
    factory = new mint.Mint();

factory.define('standard', function() {
    return [{
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
});

module.exports = factory;