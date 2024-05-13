/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let tamArr1 = nums1.length;
    let tamArr2 = nums2.length
    if(tamArr2 < tamArr1) return findMedianSortedArrays(nums2, nums1);
    let low = 0;
    let high = tamArr1;
    let mid1, mid2;
    let left = Math.floor((tamArr1 + tamArr2 + 1) /2);
    let l1, l2, r1, r2;

    while (low <= high){
        mid1 = Math.floor(( low + high) /2);
        mid2 = left - mid1;

        l1 = Number.MIN_SAFE_INTEGER;
        l2 = Number.MIN_SAFE_INTEGER;

        r1 = Number.MAX_SAFE_INTEGER;
        r2 = Number.MAX_SAFE_INTEGER;

        if(mid1 < tamArr1) r1 = nums1[mid1];
        if(mid2 < tamArr2) r2 = nums2[mid2];
        if(mid1 - 1 >= 0) l1 = nums1[mid1-1];
        if(mid2 -1 >= 0) l2 = nums2[mid2-1];

        if(l1 <= r2 && l2 <= r1) {
            if((tamArr1 + tamArr2) % 2 === 1) return Math.max(l1, l2)
            return ((Math.max(l1, l2) + Math.min(r1, r2)) / 2)
        }else if (l1 > r2){
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }
};

const nums1 = [1,2];
const nums2 = [3,4];

console.log(findMedianSortedArrays(nums1, nums2));
