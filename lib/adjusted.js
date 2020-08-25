/**
 * adjusted Module, presents the solution of a later date.
 * @module adjusted
 * @see module:wise
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
 * @name adjustedFinder
 * @function
 * @param {number} intArray Array of integers
 * @return {number} The missing number
 */
function adjustedFinder(intArray) {
  const n = intArray.length;
  const adjustment = Math.ceil(n / 2);
  let acc = intArray.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    }
    return acc - cur;
  }, 0);

  if (n % 2 === 0) {
    acc -= adjustment;
  } else {
    acc += adjustment;
  }

  return Math.abs(acc);
}

module.exports = {
  adjustedFinder,
};
