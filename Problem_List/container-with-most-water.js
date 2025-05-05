class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let l = 0,
      r = heights.length - 1,
      maxArea = 0,
      currentArea = 0;

    while (l < r) {
      currentArea = (r - l) * Math.min(heights[l], heights[r]);
      if (maxArea < currentArea) maxArea = currentArea;

      heights[l] > heights[r] ? r-- : l++;
    }
    return maxArea;
  }
}

const solution = new Solution();
const entry = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = solution.maxArea(entry);
console.log(result);
