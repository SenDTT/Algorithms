// Increasing Triplet Subsequence
function increasingTriplet(nums: number[]): boolean {
  let j: number = 0;
  let k: number = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    j = i + 1;
    while (j < nums.length - 1) {
        if (nums[j] > nums[i]) {
            k = j + 1;
            while (k < nums.length && nums[k] <= nums[j]) k++;
            console.log(i, j, k);
            console.log(nums[i], nums[j], nums[k]);
            if (k < nums.length && nums[j] < nums[k]) return true;
        }
        j++;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 5, 0, 4, 1, 3])); // true
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
