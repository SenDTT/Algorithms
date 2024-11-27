function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let map: Map<number, number> = new Map();

  while (left < right) {
    if (nums[left] + nums[right] == k && !map.has(left)) {
      map.set(left, right);
      left++;
      right--;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else {
      left++;
    }
  }

  return map.size;
}
