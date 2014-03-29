/* global exports */

var my = {};

exports.Matrix = function(data, numCols, numRows) {
    if (Object.getPrototypeOf(this) !== exports.Matrix.prototype) {
        throw new Error("Constructors must be called with new");
    }
    
    if (data.length !== numCols * numRows) {
        throw new Error("Data length and numCols * numRows must match");
    }
    
    my.data = data;
    my.numCols = numCols;
    my.numRows = numRows;
};

exports.Matrix.prototype.getRows = function() {
    var rows = [],
        rowIndex,
        cols,
        colIndex,
        col,
        index = 0;
    
    for (rowIndex = 0; rowIndex < my.numRows; rowIndex++) {
        col = rows[rowIndex] = [];
        for (colIndex = 0; colIndex < my.numCols; colIndex++) {
            col[colIndex] = my.data[index];
            index++;
        }
    }
    
    return rows;
};