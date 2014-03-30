/* global require, describe, it, beforeEach */

var should = require('./lib/should');
var mint = require('./Factories/mint');

var User = function() {
    this.id = 1;
    this.firstName = "Matt";
    this.lastName = "Dickens";
};

describe('mint', function() {
    var mnt;
    
    beforeEach(function() {
        mnt = new mint.Mint();
    });
    
    describe('constructor', function() {
        it('should exist', function() {
            should.exist(mint.Mint);
        });
        
        it('should throw an exception if called without new', function() {
            should(function() { mint.Mint(); }).throw(/new/);
        });
    });
    
    describe('define', function() {
        it('should let you register an objet constructor', function() {
            should(function() {
                mnt.define('user', User);
            }).not.throw();
        });
    });
    
    describe('create', function() {
        it('should let you instantiate a registered object', function() {
            mnt.define('user', User);
            var user = mnt.create('user');
            user.should.have.properties({
                id: 1,
                firstName: 'Matt',
                lastName: 'Dickens'
            });
        });
        
        it('should throw an exception on creating an unregistered object', function() {
            should(function() {
                var user = mnt.create('user');
            }).throw(/register/);
        }); 
        
        it('should let you create modified objects', function() {
            mnt.define('user', User);
            var user = mnt.create('user', {
                id: 2
            });
            user.should.have.properties({
                id: 2,
                firstName: 'Matt',
                lastName: 'Dickens'
            });
        });
        
        it('should let you create extended objects', function() {
            mnt.define('user', User);
            var user = mnt.create('user', {
                hairColor: 'Ginger'
            });
            user.should.have.properties({
                id: 1,
                firstName: 'Matt',
                lastName: 'Dickens',
                hairColor: 'Ginger'
            });
        });
    });
    
    it('should support multiple independent instances', function() {
        var first = new mint.Mint(),
            second = new mint.Mint();
        
        first.define('user', User);
        should(function() { second.create('user'); }).throw(/register/);
    });
});