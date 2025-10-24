# Product of Array Except Self

## Problem
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

## Examples

**Example 1:**
- Input: `nums = [1,2,4,6]`
- Output: `[48,24,12,8]`

**Example 2:**
- Input: `nums = [-1,0,1,2,3]`
- Output: `[0,-6,0,0,0]`

## Time & Space Complexity
- **Time Complexity:** O(n) - two passes through the array
- **Space Complexity:** O(1) - excluding the output array
