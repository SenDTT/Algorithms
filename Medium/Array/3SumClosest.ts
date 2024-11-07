// 3Sum Closest
function threeSumClosest(nums: number[], target: number): number {
  if (!nums || nums.length < 3) return 0;
  nums.sort((a, b) => a - b);
  let closetSum: number = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let left: number = i + 1;
    let right: number = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum == target) return sum;

      if (Math.abs(target - sum) < Math.abs(target - closetSum)) {
        closetSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closetSum;
}

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); // -2
console.log(threeSumClosest([0, 1, 2], 3)); // 3
console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 3, 97, 102, 200], 300)); // 300
console.log(threeSumClosest([1, 1, 1, 5, 5, 5, 5, 5, 5], 14)); // 15
console.log("threeSumClosest: ", threeSumClosest([2, 3, 8, 9, 10], 16)); // 15
console.log(threeSumClosest([1, 3, 4, 7, 8, 9], 15)); // 15
console.log(
  threeSumClosest([-84, 92, 26, 19, -7, 9, 42, -51, 8, 30, -100, -13, -38], 78)
); // 77

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
