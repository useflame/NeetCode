# Group Anagrams

## Problem
Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

## Examples
- Input: `strs = ["act","pots","tops","cat","stop","hat"]`
- Output: `[["hat"],["act", "cat"],["stop", "pots", "tops"]]`

- Input: `strs = ["x"]`
- Output: `[["x"]]`

- Input: `strs = [""]`
- Output: `[[""]]`

## Constraints
- `1 <= strs.length <= 1000`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters

## Recommended Time & Space Complexity
- Time: O(n · k log k) using sorted-string keys, or O(n · k) using frequency-count keys, where `n` is number of strings and `k` is max string length
- Space: O(n · k)


