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

var bucketSort = function(arr, buckets){

}

var topKFrequentBucketSort = function(nums, k) {
    let map = new Map();
    
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else{
            map.set(num, map.get(num) + 1);
        }
    }
    //criando os buckets de acordo com a frequencia
    let buckets = new Array(nums.length + 1).fill().map(() => []);
    console.log(buckets);
    for (let [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]); // Adicionar todos os números do balde
        }
    }
    return result.slice(0,k);
}

//teste
nums = [1,1,1,2,2,3]
k = 2
topKFrequent(nums, k);