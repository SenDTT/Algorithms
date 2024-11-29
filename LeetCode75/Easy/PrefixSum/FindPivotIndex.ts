function pivotIndex(nums: number[]): number {
  let totalRight = nums.reduce((sum, cur) => sum + cur);
  let totalLeft = 0;

  for (let i = 0; i < nums.length; i++) {
    totalRight -= nums[i];

    if (totalRight === totalLeft) return i;

    totalLeft += nums[i];
  }

  return -1;
}
