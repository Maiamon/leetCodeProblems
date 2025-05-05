class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      let l = i + 1;
      let r = nums.length - 1;

      while (l < r) {
        let threesum = nums[l] + nums[r] + nums[i];

        if (threesum == 0) {
          result.push([nums[i], nums[l], nums[r]]);
          l++;
          while (nums[l] == nums[l - 1] && l < r) l++;
        } else if (threesum < 0) {
          l++;
        } else {
          r--;
        }
      }
    }
    return result;
  }
}

const solution = new Solution();
const entry = [-1, 0, 1, 2, -1, -4];
const entry2 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const result = solution.threeSum(entry2);
console.log(result);
