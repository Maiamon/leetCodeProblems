class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let l = 0,
      r = s.length - 1;

    let sLowerCase = s.toLowerCase();

    while (l < r) {
      while (!/[a-z0-9]/.test(sLowerCase[l])) l++;
      while (!/[a-z0-9]/.test(sLowerCase[r])) r--;
      if (sLowerCase[l] != sLowerCase[r]) return false;
      l++;
      r--;
    }

    return true;
  }
}

const solution = new Solution();
const entry = "No lemon, no melon";
const result = solution.isPalindrome(entry);
console.log(result);
