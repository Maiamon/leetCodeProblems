class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffs = new Map()

        for (let i = 0; i < nums.length; i++) {
            if (diffs.has(nums[i])) {
                // Armazenar os índices dos números que somam o target
                return([diffs.get(nums[i]), i])
            } else {
                // Armazenar a diferença entre target e num, e o índice de num
                diffs.set(target - nums[i], i)
            }
        }

        return []
    }
}
