/* global exports */

exports.UsageData = function() {
    if (Object.getPrototypeOf(this) !== exports.UsageData.prototype) {
        throw new Error('Constructor must be called with new');
    }
};