function robII(nums: number[]): number {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  let n = nums.length;

  const robLinear = (arr) => {
    let prev1 = 0,
      prev2 = 0;

    for (let num of arr) {
      const temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
    }

    return prev1;
  };

  let maxOne = robLinear(nums.slice(0, n - 1));
  let maxTwo = robLinear(nums.slice(1));

  return Math.max(maxOne, maxTwo);
}


function robII2(nums: number[]): number {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  let n = nums.length;

  const robLinear = (arr) => {
    const dp: number[] = [];
    dp[0] = arr[0];
    dp[1] = Math.max(dp[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }

    return dp[dp.length - 1];
  };

  const maxOne = robLinear(nums.slice(0, n - 1));
  const maxTwo = robLinear(nums.slice(1));

  return Math.max(maxOne, maxTwo);
}
