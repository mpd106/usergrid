/* global exports */

exports.Matrix = function(data) {
    if (Object.getPrototypeOf(this) !== exports.Matrix.prototype) {
        throw new Error("Constructors must be called with new");
    }
};