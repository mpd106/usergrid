/* global exports */

exports.Mint = function() {
    var map = {};
    
    var copyProperties = function(from, to) {
        var property;
        for (property in from) {
            to[property] = from[property];
        }
    };
    
    if (Object.getPrototypeOf(this) !== exports.Mint.prototype) {
        throw new Error("Constructor must be called with new");
    }
    
    this.define = function(name, constructor) {
        map[name] = constructor;
    };
    
    this.create = function(name) {
        var obj,
            additional;
        
        if (typeof map[name] === 'undefined') {
            throw new Error('You must first register a constructor with define');
        }

        obj = new map[name]();
        
        if (arguments.length > 1) {
            additional = arguments[1];
            copyProperties(additional, obj);
        }
        
        return obj;
    };
};