/* global exports */

// TODO: This is really an array comparison function--find a home for it
var compareEventNames = function(first, second) {
    if (first === second) { return true; }
    if (first === null || second === null) { return false; }
    if (first.length !== second.length) { return false; }
    
    var index;
    for (index = 0; index < first.length; index++) {
        if (first[index] !== second[index]) {
            return false;
        }
    }
    
    return true;
};

// TODO: This is really just an array copy--find a home for it
var copyEventNames = function(eventNames) {
    return eventNames.slice(0);
};

var getEventNamesFromUser = function(user) {
    return Object.keys(user);
};

var getEventNames = function(data) {
    var headers = [],
        userIndex,
        firstUserEventNames = getEventNamesFromUser(data[0]),
        currentUserEventNames;
    
    for (userIndex = 1; userIndex < data.length; userIndex++) {
        currentUserEventNames = getEventNamesFromUser(data[userIndex]);
        if (!compareEventNames(firstUserEventNames, currentUserEventNames)) {
            throw new Error("Each user's event names must match");
        }
    }
    
    return firstUserEventNames;
};

exports.UsageData = function(data) {
    var eventNames;
    
    if (Object.getPrototypeOf(this) !== exports.UsageData.prototype) {
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