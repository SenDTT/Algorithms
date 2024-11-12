function findPrefixScore(nums: number[]): number[] {
  let sum: number = 0;
  let maxNum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);

    let term = nums[i] + maxNum + sum;

    sum += nums[i] + maxNum;

    nums[i] = term;
  }

  return nums;
}

console.log(findPrefixScore([2, 3, 7, 5, 10])); // [4,10,24,36,56]
console.log(findPrefixScore([1,1,2,4,8,16]));  // [2,4,8,16,32,64]