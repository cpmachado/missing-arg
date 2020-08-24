/**
 * test_wise module
 * @module test_wise
 * @see module:wise
 * @license MIT
 */

const assert = require('assert').strict;
const {wiseFinder} = require('../lib/wise');
const {intSetGenerator} = require('../lib/util');


describe('wise', function() {
  describe('#wiseFinder', function() {
    const evens = Array(6).fill(0).map((_, i) => Math.pow(10, i + 1));
    const sizes = evens.concat(evens.map((e) => e + 1));
    sizes.forEach(function(size) {
      const deletedEntry = Math.floor(Math.random() * size);
      const testArray = intSetGenerator(size, deletedEntry);

      it(`Should match ${deletedEntry}`, function() {
        assert.deepEqual(wiseFinder(testArray, deletedEntry), deletedEntry);
      });
    });
  });
});
