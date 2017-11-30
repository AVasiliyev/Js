var assert = require('assert');
var MathHelper = require("../js/MathHelper");

describe('Array', function() {
  
  describe('Max', function() {
    it('Test 1', function() {
      assert.equal(234, MathHelper.MathHelper.FindMaxInArray([5, 6, 122, 234, 123]));
    });
    it('Test 2', function() {
      assert.equal(6, MathHelper.MathHelper.FindMaxInArray([5, 6, -123, -234, -123]));
    });
    it('Test 3', function() {
      assert.equal(99, MathHelper.MathHelper.FindMaxInArray([0, 6, 99, -234, -123]));
    });
  });

  describe('Min', function() {
    it('Test 1', function() {
      assert.equal(5, MathHelper.MathHelper.FindMinInArray([5, 6, 122, 234, 123]));
    });
    it('Test 2', function() {
      assert.equal(-1231, MathHelper.MathHelper.FindMinInArray([5, 6, -1231, -234, -123]));
    });
    it('Test 3', function() {
      assert.equal(-234, MathHelper.MathHelper.FindMinInArray([0, 6, 99, -234, -123]));
    });
  });

  describe('2 Max', function() {
    it('Test 1', function() {
      assert.deepEqual([123,234], MathHelper.MathHelper.Find2MaxInArray([5, 6, 122, 234, 123]));
    });
    it('Test 2', function() {
      assert.deepEqual([5,6], MathHelper.MathHelper.Find2MaxInArray([5, 6, -123, -234, -123]));
    });
    it('Test 3', function() {
      assert.deepEqual([6,99], MathHelper.MathHelper.Find2MaxInArray([0, 6, 99, -234, -123]));
    });
  });

  describe('2 Min', function() {
    it('Test 1', function() {
      assert.deepEqual([6, 5], MathHelper.MathHelper.Find2MinInArray([5, 6, 122, 234, 123]));
    });
    it('Test 2', function() {
      assert.deepEqual([-234,-123], MathHelper.MathHelper.Find2MinInArray([5, 6, -123, -234, -123]));
    });
    it('Test 3', function() {
      assert.deepEqual([-234,-123], MathHelper.MathHelper.Find2MinInArray([0, 6, 99, -234, -123]));
    });
  });
});