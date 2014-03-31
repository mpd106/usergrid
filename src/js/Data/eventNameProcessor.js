/* global exports */

exports.EventNameProcessor = function() {
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

    this.getEventNames = function(data) {
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
};