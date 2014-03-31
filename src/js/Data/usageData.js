/* global module */


// TODO: This is really just an array copy--find a home for it
var copyEventNames = function(eventNames) {
    return eventNames.slice(0);
};

module.exports = function(eventNameProcessor) {
    var UsageData = function(data) {
        var eventNames;

        if (Object.getPrototypeOf(this) !== UsageData.prototype) {
            throw new Error('Constructor must be called with new');
        }

        if (data.length < 1) {
            throw new Error('Data must contain at least one user');
        }

        eventNames = eventNameProcessor.getEventNames(data);

        // TODO: memoize
        this.getEventNames = function() {
            return copyEventNames(eventNames);
        };
    };
    
    return {
        UsageData: UsageData
    };
};