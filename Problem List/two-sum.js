/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visitados = new Map();
    let result = [];

    for(let i = 0; ; i++) {
        if(visitados.has(nums[i])) {
            result = [visitados.get(nums[i]), i];
            return result;
        }

        visitados.set(target - nums[i], i);
    }
};

const nums = [3,2,4];
const target = 6;

console.log(twoSum(nums, target));
