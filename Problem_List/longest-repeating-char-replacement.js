class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let leftWindow = 0;
    let rightWindow = 0;
    let maxFrequency = 0;
    let result = 0;

    let count = new Set();

    for (rightWindow; rightWindow < s.length; rightWindow++) {
      if (count.has(s[rightWindow])) {
        count.set(s[rightWindow], count.get(s[rightWindow]) + 1);
      } else {
        count.set(s[rightWindow], 1);
      }
      //maxFrequency = Math.max(maxFrequency, count.get(s.rightWindowr));

      // Corrige o Left Window se necessário
      while (rightWindow - leftWindow + 1 - Math.max(count.values()) > k) {
        console.log(count.get(s[leftWindow]));
        leftWindow++;
        count.set(s[leftWindow], count.get(s[leftWindow]) - 1);
      }
      result = Math.max(result, rightWindow - leftWindow + 1);
    }

    return result;
  }
}

const solution = new Solution();
const entry = "AAABABB";
const k = 1;
const result = solution.characterReplacement(entry, k);
console.log(result);
