function productExceptSelf(nums: number[]): number[] {
  let temp: number = 1;
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = temp;
    temp *= nums[i];
  }
  console.log(result);
  temp = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= temp;
    temp *= nums[j];
  }
  console.log(result);
  return result;
}
