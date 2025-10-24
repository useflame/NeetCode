/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const result = Array(nums.length).fill(1)
    let prefix = 1
    for (let i in nums) {
        result[i] *= prefix
        prefix *= nums[i]
    }
    prefix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= prefix
        prefix *= nums[i]
    }
    return result
}

// Test cases
console.log(JSON.stringify(productExceptSelf([1,2,4,6])) === JSON.stringify([48,24,12,8]))
console.log(JSON.stringify(productExceptSelf([-1,0,1,2,3])) === JSON.stringify([0,-6,0,0,0]))
