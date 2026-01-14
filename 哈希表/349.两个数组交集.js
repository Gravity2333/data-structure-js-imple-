/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  for (const item of nums1) {
    set.add(item);
  }

  const intersectionSet = new Set();

  for (const item of nums2) {
    if (set.has(item)) {
      intersectionSet.add(item);
    }
  }

  return Array.from(intersectionSet);
};
