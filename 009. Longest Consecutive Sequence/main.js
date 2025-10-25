/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    const hashSet = new Set(nums)
    let result = 0

    for (let num of nums) {
        let length = 0
        while(hashSet.has(num + length)) {
            length++
        }
        result = Math.max(length, result)
    }
    
    return result
}

// Test cases
const nums1 = [2,20,4,10,3,4,5]
const nums2 = [0,3,2,5,4,6,1,1]
const nums3 = [100,4,200,1,3,2]
const nums4 = [0,-1]

console.log(longestConsecutive(nums1) === 4)
console.log(longestConsecutive(nums2) === 7)
console.log(longestConsecutive(nums3) === 4)
console.log(longestConsecutive(nums4) === 2)
