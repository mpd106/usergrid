/* global exports */

exports.Mint = function() {
    var map = {};
    
    if (Object.getPrototypeOf(this) !== exports.Mint.prototype) {
        throw new Error("Constructor must be called with new");
    }
    
    this.define = function(name, constructor) {
        map[name] = constructor;
    };
    
    this.create = function(name) {
        if (typeof map[name] === 'undefined') {
            throw new Error('You must first register a constructor with define');
        }

        return new map[name]();
    };
};