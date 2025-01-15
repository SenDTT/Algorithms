function maximumSubarraySum(nums: number[], k: number): number {
  let max = 0;
  let sum = 0;
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    sum += nums[i];

    if (i >= k) {
      const left = nums[i - k];
      map.set(left, map.get(left)! - 1);
      if (map.get(left) === 0) {
        map.delete(left);
      }
      sum -= left;
    }

    if (i >= k - 1 && map.size === k) {
      max = Math.max(max, sum);
    }
  }

  return max;
}
