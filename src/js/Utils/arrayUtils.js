/* global exports */

exports.areEqual = function(first, second) {
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
