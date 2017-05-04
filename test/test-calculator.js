var chai = require('chai')
var should = chai.should();
var calculator = require('../calculator')

describe('Add Test', function() {
  it('should return 2 when the first value is 1 and last value is 1', function() {
    calculator.add(1,1).should.equal(2)
  });
  it('should return 3 when the first value is 1 and last value is 2', function() {
    calculator.add(1,2).should.equal(3)
  });
  it('should return 51 when the first value is 49 and last value is 2', function() {
    calculator.add(49,2).should.equal(51)
  });
  it('should return 100 when the first value is 99 and last value is 1', function() {
    calculator.add(99,1).should.equal(100)
  });
});

describe('Substraction Test', function() {
  it('should return 0 when the first value is 1 and last value is 1', function() {
    calculator.subtract(1,1).should.equal(0)
  });
  it('should return 3 when the first value is 4 and last value is 1', function() {
    calculator.subtract(4,1).should.equal(3)
  });
  it('should return 2 when the first value is 4 and last value is 2', function() {
    calculator.subtract(4,2).should.equal(2)
  });
  it('should return -1 when the first value is 1 and last value is 2', function() {
    calculator.subtract(1,2).should.equal(-1)
  });
});

describe('Multiple Test', function() {
  it('should return 1 when the first value is 1 and last value is 1', function() {
    calculator.multiple(1,1).should.equal(1)
  });
});

describe('Devided Test', function() {
  it('should return 1 when the first value is 1 and last value is 1', function() {
    calculator.devided(1,1).should.equal(1)
  });
});

describe('Exponent Test', function() {
  it('should return 1 when the first value is 1 and last value is 1', function() {
    calculator.exponent(1,1).should.equal(1)
  });

  it('should return 1 when the first value is 1 and last value is 2', function() {
    calculator.exponent(1,2).should.equal(1)
  });

  it('should return 2 when the first value is 2 and last value is 1', function() {
    calculator.exponent(2,1).should.equal(2)
  });

  it('should return 8 when the first value is 2 and last value is 3', function() {
    calculator.exponent(2,3).should.equal(8)
  });

  it('should return 16 when the first value is 4 and last value is 2', function() {
    calculator.exponent(4,2).should.equal(16)
  });
});

describe('Root Test', function() {
  it('should return 2 when the first value is 8 and last value is 3', function() {
    calculator.root(8,3).should.equal(2)
  });
  it('should return 4 when the first value is 16 and last value is 2', function() {
    calculator.root(16,2).should.equal(4)
  });
});
