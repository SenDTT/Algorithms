let nums = [0, 1, 7, 4, 4, 5],
  lower = 3,
  upper = 6;

// function countFairPairs(nums: number[], lower: number, upper: number): number {
//   let count: number = 0;
//   let previous: number;
//   let sum: number;

//   nums.sort((a, b) => a - b);
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     if (nums[left] + nums[right] >= lower && nums[left] + nums[right] <= upper)
//       break;

//     let mid = Math.floor((left + right) / 2);
//     if (nums[left] + nums[mid] < lower) {
//       left++;
//     } else if (nums[right] + nums[mid] > upper) {
//       right--;
//     } else {
//       left++;
//       right--;
//     }
//   }

//   for (let i = left; i < right; i++) {
//     sum = nums[i];
//     previous = 0;
//     for (let j = i + 1; j <= right; j++) {
//       sum = sum - previous + nums[j];

//       if (sum >= lower && sum <= upper) count++;
//       previous = nums[j];
//     }
//   }

//   return count;
// }

function countFairPairs(nums: number[], lower: number, upper: number): number {
  let count: number = 0;

  nums.sort((a, b) => a - b);
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum >= lower && sum <= upper) {
      count++;
      for (let j = left + 1; j < right; j++) {
        if (nums[left] + nums[j] >= lower && nums[left] + nums[j] <= upper) count++;
      }
      left++;
    } else if (sum > upper) {
      right--;
    } else {
      left++;
    }
  }

  return count;
}

console.log(countFairPairs(nums, lower, upper));
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11));
console.log(countFairPairs([0, 0, 0, 0, 0, 0], 0, 0));
