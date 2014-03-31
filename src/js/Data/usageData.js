/* global module */

module.exports = function(eventNameProcessor) {
    var UsageData = function(data) {
        var eventNames;

        if (Object.getPrototypeOf(this) !== UsageData.prototype) {
            throw new Error('Constructor must be called with new');
        }

        if (data.length < 1) {
            throw new Error('Data must contain at least one user');
        }

        eventNames = getEventNames(data);

        // TODO: memoize
        this.getEventNames = function() {
            return copyEventNames(eventNames);
        };
    };
    
    return {
        UsageData: UsageData
    };
};