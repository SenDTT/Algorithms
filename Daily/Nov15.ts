// Find the Power of K-Size Subarrays I
function resultsArray(nums: number[], k: number): number[] {
  let results: number[] = [];
  let len: number = nums.length - k + 1;

  for (let i = 0; i < len; i++) {
    let isPower: boolean = true;
    let index: number = i + 1;
    while (index < i + k) {
      if (nums[index] < nums[index - 1] || nums[index] != nums[index - 1] + 1) {
        isPower = false;
        break;
      }
      index++;
    }
    results.push(isPower ? nums[index - 1] : -1);
  }

  return results;
}


console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)); // [3, 4, -1, -1, -1]