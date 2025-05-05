class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0
    let r = numbers.length - 1
    
    while (l < r) {      
      const sum = numbers[l] + numbers[r]

      if (sum === target) {
        return [l+1, r+1]
      }
      else if (sum < target) {
        l++
      }
      else {
        r--
      }
    }
    return []
  }
}

// testar a classe
const solution = new Solution()
const numbers = [2, 7, 11, 15]
const target = 9
const result = solution.twoSum(numbers, target)
console.log(result) // [2, 7