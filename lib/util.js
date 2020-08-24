/**
 * util Module, has functions useful for testing
 * @module util
 * @license MIT
 */

/**
 * Generates a given set.
 *
 * <p> With given properties: </p>
 * <ul>
 *  <li> has unique values</li>
 *  <li> the set is stored in an array.</li>
 *  <li> is the integer set from 1 to the array length</li>
 *  <li> has a missing element as null</li>
 * </ul>
 *
 * @name intSetGenerator
 * @function
 * @param {number} size - size of set
 * @param {number} deletedEntry - entry to be deleted
 * @return {Array} Set in an array
 */
function intSetGenerator(size, deletedEntry) {
  const intArray = Array(size).fill(0).map((_, i) => i + 1);

  intArray[deletedEntry - 1] = null;

  return intArray;
}

module.exports = {
  intSetGenerator,
};
