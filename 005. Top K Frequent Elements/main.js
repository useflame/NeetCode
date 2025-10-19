function topKFrequent(nums, k) {
  const hashMap = {};
  for (let num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  const bucket = Array(nums.length + 1).fill(null).map(() => []);
  
  for (const [num, freq] of Object.entries(hashMap)) {
    bucket[freq].push(parseInt(num));
  }

  const result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }
  
  return result.slice(0, k);
}

// Test cases
console.log(JSON.stringify(topKFrequent([1,2,2,3,3,3], 2)) === JSON.stringify([3,2]))
console.log(JSON.stringify(topKFrequent([7,7], 1)) === JSON.stringify([7]))

