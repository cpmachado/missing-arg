/**
 * main module to export functions
 * @module missing-arg
 * @see module:wise
 * @see module:adjusted
 * @license MIT
 * @return {Object} Object with functions for both solutions
 */
const {wiseFinder} = require('./lib/wise');
const {adjustedFinder} = require('./lib/adjusted');

module.exports = {
  adjustedFinder,
  wiseFinder,
};
