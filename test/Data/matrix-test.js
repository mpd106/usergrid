/* global require, describe, it */

var should = require('../lib/should');
var matrix = require('../../src/js/data/matrix');

describe("matrix", function() {
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    describe('constructor', function() {
        it('should exist', function() {
            should.exist(matrix.Matrix);
        });
        
        it('should throw if new is omitted', function() {
            should(function() { var mat = matrix.Matrix(data, 3, 3); }).throw(/new/);
        });
        
        it('should return a valid matrix', function() {
            var mat = new matrix.Matrix(data, 3, 3);
            should.exist(mat);
        });
        
        it('should expect the correct number of elements', function() {
            data.push(10);
            should(function() {
                var mat = new matrix.Matrix(data, 3, 3);
            }).throw(/numCols \* numRows/);
        });
    });
    
    describe('getRows', function() {
        var mat = new matrix.Matrix(data, 3, 3);
        
        it('should return an array', function() {
            var rows = mat.getRows();
            rows.should.be.an.instanceOf(Array);
        });
        
        it('should have n elements', function() {
            var rows = mat.getRows();
            rows.length.should.equal(3);
        });
        
        it('should have rows of the correct length', function() {
            var rows = mat.getRows(),
                numRows = rows.length,
                expectedLength = 3,
                rowIndex;
            
            for (rowIndex = 0; rowIndex < numRows; rowIndex++) {
                rows[rowIndex].length.should.equal(expectedLength);
            }
        });
        
        it('should have elements in the right oder', function() {
            var rows = mat.getRows(),
                numRows = rows.length,
                rowIndex,
                numCols,
                colIndex,
                col,
                index = 0;
            
            for (rowIndex = 0; rowIndex < numRows; rowIndex++) {
                col = rows[rowIndex];
                for (colIndex = 0; colIndex < col.length; colIndex++) {
                    col[colIndex].should.equal(data[index]);
                    index++;
                }
            }
        });
    });
    
    it('should support multiple independent instances', function() {
        var firstData = [1, 2, 3, 4, 5, 6];
        var secondData = [7, 8, 9, 10];
        var first = new matrix.Matrix(firstData, 2, 3);
        var second = new matrix.Matrix(secondData, 2, 2);
        
        first.getRows().length.should.not.equal(second.getRows().length);
    });
    
    it('should support non-square matrices', function() {
        var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var mat = new matrix.Matrix(data, 2, 5);
        should.exist(mat);
    });
});