/**
 * Algorithm : Linear Search
 * Time complexity O(n)
 *
 * The search algorithm works left to right step by step
 */

const arr = [8, 2, 1, 16, 20, 30, 28, 19, 40];
const target = 50;

const linearSeacrch = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};

console.log(
  "Found the target value at index of: " + linearSeacrch(target, arr)
);
