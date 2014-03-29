/* global require, describe, it */

var should = require('./lib/should');
var matrix = require('../src/js/matrix');

describe("matrix", function() {
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    describe('constructor', function() {
        it('should exist', function() {
            var mat = new matrix.Matrix(data);
        });
        
        it('should throw if new is omitted', function() {
            should(function() { var mat = matrix.Matrix(data); }).throw(/new/);
        });
        
        it('should return a valid matrix', function() {
            var mat = new matrix.Matrix(data);
            should.exist(mat);
        });
    });
});