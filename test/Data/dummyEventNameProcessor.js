/* global exports */

exports.DummyEventNameProcessor = function() {
    this.getEventNames = function() {
        return ['first.event', 'second.event', 'third.event', 'fourth.event'];
    };
};