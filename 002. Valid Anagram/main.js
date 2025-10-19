/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const sHash = {}
    const tHash = {}
    for (let i = 0; i < s.length; i++) {
        if (!sHash[s[i]]) {
            sHash[s[i]] = 1
        } else sHash[s[i]]++
         if (!tHash[t[i]]) {
            tHash[t[i]] = 1
        } else tHash[t[i]]++
    }
    for (let i of Object.keys(sHash)) {
        if (sHash[i] !== tHash[i]) {
            return false
        }
    }
    return true
}

// Test cases
console.log(isAnagram("racecar", "carrace") === true)
console.log(isAnagram("jar", "jam") === false)
