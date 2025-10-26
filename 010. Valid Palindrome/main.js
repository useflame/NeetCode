/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let start = 0
    let end = s.length - 1

    while(start < end) {
        while (s[start].match(/[^a-zA-Z0-9]/) && start < end) {
            start++
        }
        while (s[end].match(/[^a-zA-Z0-9]/) && start < end) {
            end--
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false
        }
        start++
        end--
    }
    return true
}

// Test cases
console.log(isPalindrome("Was it a car or a cat I saw?") === true)
console.log(isPalindrome("tab a cat") === false)
console.log(isPalindrome("A man, a plan, a canal: Panama") === true)
console.log(isPalindrome("race a car") === false)
console.log(isPalindrome(" ") === true)
