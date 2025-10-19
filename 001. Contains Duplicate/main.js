/**
 * @param {number[]} nums
 * @return {boolean}
 */
function hasDuplicate(nums) {
    const hashMap = {}

    for (let i of nums) {
        if (hashMap[i] === 1) {
            return true
        }
        hashMap[i] = 1
    }

    return false
}

// Test cases
console.log(hasDuplicate([1,2,3,1]) === true)
console.log(hasDuplicate([1,2,3,4]) === false)
