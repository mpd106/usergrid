/* global module, require */

module.exports = function(arrayUtils) {
    var EventNameProcessor = function() {
        var getEventNamesFromUser = function(user) {
            return Object.keys(user);
        };

        this.getEventNames = function(data) {
            var headers = [],
                userIndex,
                firstUserEventNames,
                currentUserEventNames;

            if (data.length < 1) {
                throw new Error('Data must contain at least one user');
            }

            firstUserEventNames = getEventNamesFromUser(data[0]);

            for (userIndex = 1; userIndex < data.length; userIndex++) {
                currentUserEventNames = getEventNamesFromUser(data[userIndex]);
                if (!arrayUtils.areEqual(firstUserEventNames, currentUserEventNames)) {
                    throw new Error("Each user's event names must match");
                }
            }

            return firstUserEventNames;
        };
    };

    return {
        EventNameProcessor: EventNameProcessor
    };
};
