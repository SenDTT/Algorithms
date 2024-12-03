function longestOnes(nums: number[], k: number): number {
  let start: number = 0;
  let maxOnes: number = 0;
  let zeroCount: number = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[start] === 0) {
        zeroCount--;
      }
      start++;
    }

    maxOnes = Math.max(maxOnes, end - start + 1);
  }

  return maxOnes;
}
