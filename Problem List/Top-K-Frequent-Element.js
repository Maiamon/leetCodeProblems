/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();

  for(let i = 0; i < nums.length; i++){
      if(map.has(nums[i])){
          map.set(nums[i], map.get(nums[i]) + 1);
      } else {
          map.set(nums[i], 1);
      }
  }

  // Sort the map by frequency and get the top k elements
  const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);

  // Get the keys of the top k elements
  const topKKeys = sortedEntries.slice(0, k).map(entry => entry[0]);
  console.log(topKKeys);
  return topKKeys;
};

//teste
nums = [1,1,1,2,2,3]
k = 2
topKFrequent(nums, k);