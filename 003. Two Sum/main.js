/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]

        if (difference in hash) {
            return [hash[difference], i]
        }
        
        hash[nums[i]] = i
    }

}

// Test cases
console.log(JSON.stringify(twoSum([3,4,5,6], 7)) === JSON.stringify([0,1]))
console.log(JSON.stringify(twoSum([4,5,6], 10)) === JSON.stringify([0,2]))
console.log(JSON.stringify(twoSum([5,5], 10)) === JSON.stringify([0,1]))
