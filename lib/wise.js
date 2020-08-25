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
  const sumN = n * (n + 1) / 2;
  let acc = 0;

  for (let idx = 0; idx < n; idx++) {
    const cur = intArray[idx];
    acc += Number(cur);
  }

  return sumN - acc;
}

/**
 * Finds the missing number.
 *
 * <p> This is the same algorithm as wiseFinder, but adds index in the base
 * sum. </p>
 *
 * @name wiseStreamedFinder
 * @function
 * @param {number} intArray Array of integers
 * @return {number} The missing number
 */
function wiseStreamedFinder(intArray) {
  const n = intArray.length;
  let sumN = 0;
  let acc = 0;

  for (let idx = 0; idx < n; idx++) {
    const cur = intArray[idx];
    sumN += (idx + 1);
    acc += Number(cur);
  }

  return sumN - acc;
}


module.exports = {
  wiseFinder,
  wiseStreamedFinder,
};
