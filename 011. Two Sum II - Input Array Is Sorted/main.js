
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let start = 0
    let end = numbers.length - 1;

    while (numbers[0] + numbers[end] > target) { end-- }
    while (numbers[start] + numbers[end] < target) { start++ }
    while (numbers[start] + numbers[end] > target) { end-- }
    while (numbers[start] + numbers[end] < target) { start++ }

    return [start + 1, end + 1]
}

// Test cases
console.log(JSON.stringify(twoSum([1, 2, 3, 4], 3)) === JSON.stringify([1, 2]))
console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([1, 2]))
console.log(JSON.stringify(twoSum([-1, 0], -1)) === JSON.stringify([1, 2]))
