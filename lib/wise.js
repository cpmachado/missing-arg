/**
 * wise Module, presents the solution I gave in the interview
 * @module wise
 * @license MIT
 */

/**
 * Finds the missing number.
 *
 * <p> Assumes, the parameter is a set with the given properties: </p>
 * <ul>
 *  <li> has unique values</li>
 *  <li> is unordered</li>
 *  <li> the set is stored in an array</li>
 *  <li> is the integer set from 1 to the array length</li>
 *  <li> has a missing element as null</li>
 * </ul>
 *
 * @name wiseFinder
 * @function
 * @param {number} intArray Array of integers
 * @return {number} The missing number
 */
function wiseFinder(intArray) {
  const n = intArray.length;
  const sumN = Math.floor(n * (n + 1) / 2);
  const acc = intArray.reduce((previous, e) => {
    if (e === null) {
      return previous;
    }
    return previous + e;
  });
  return sumN - acc;
}

module.exports = {
  wiseFinder,
};
