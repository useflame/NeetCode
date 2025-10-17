/**
 * @param {string[]} strs
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
    const result = {};
    for (let s of strs) {
        const sSorted = s.split("").sort().join("");
        if (!result[sSorted]) {
            result[sSorted] = [];
        }

        result[sSorted].push(s)
    }
    return Object.values(result)
}

// Test cases
console.log(JSON.stringify(groupAnagrams(["act","pots","tops","cat","stop","hat"])) === JSON.stringify([["act","cat"],["pots","tops","stop"],["hat"]]))
console.log(JSON.stringify(groupAnagrams(["x"])) === JSON.stringify([["x"]]))
console.log(JSON.stringify(groupAnagrams([""])) === JSON.stringify([[""]]))
