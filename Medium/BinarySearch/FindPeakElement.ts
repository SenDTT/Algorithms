function findPeakElement(nums: number[]): number {
  let peak: number = 0;
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid == left) {
      peak = nums[left] < nums[right] ? right : left;
      break;
    }

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      peak = mid;
      left++;
    } else if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return peak;
}

console.log(findPeakElement([1, 2, 3, 1]) == 2);
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]) == 5);
console.log(findPeakElement([1, 2]) == 2);