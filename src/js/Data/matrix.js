/* global exports */

exports.Matrix = function(data, numCols, numRows) {
    if (Object.getPrototypeOf(this) !== exports.Matrix.prototype) {
        throw new Error("Constructor must be called with new");
    }
    
    if (data.length !== numCols * numRows) {
        throw new Error("Data length and numCols * numRows must match");
    }
    
    this.getRows = function() {
        var rows = [],
            rowIndex,
            cols,
            colIndex,
            col,
            index = 0;

        for (rowIndex = 0; rowIndex < numRows; rowIndex++) {
            col = rows[rowIndex] = [];
            for (colIndex = 0; colIndex < numCols; colIndex++) {
                col[colIndex] = data[index];
                index++;
            }
        }

        return rows;
    };
};