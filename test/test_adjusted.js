/**
 * test_adjusted module
 * @module test_adjusted
 * @see module:adjusted
 * @license MIT
 */

const assert = require('assert').strict;
const {adjustedFinder} = require('../lib/adjusted');
const {intSetGenerator} = require('../lib/util');


describe('adjusted', function() {
  describe('#adjustedFinder', function() {
    const evens = Array(6).fill(0).map((_, i) => Math.pow(10, i + 1));
    const sizes = evens.concat(evens.map((e) => e + 1));
    sizes.forEach(function(size) {
      const deletedEntry = Math.floor(Math.random() * size);
      const testArray = intSetGenerator(size, deletedEntry);

      it(`Should match ${deletedEntry}`, function() {
        assert.deepEqual(adjustedFinder(testArray, deletedEntry),
            deletedEntry);
      });
    });
  });
});
