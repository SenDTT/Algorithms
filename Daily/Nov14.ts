function findLengthOfShortestSubarray(arr: number[]): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right && arr[left] <= arr[right]) {
    let mid: number = Math.floor((left + right) / 2);
    if (arr[left] <= arr[mid] && arr[mid] <= arr[right]) {
      left++;
      right--;
    } else if (arr[left] <= arr[mid] && arr[mid] > arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return right > left ? right - left : 0;
}

console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]) === 3);
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1]) === 4);
console.log(findLengthOfShortestSubarray([1, 2, 3]) === 0);
console.log(findLengthOfShortestSubarray([2, 2, 2, 1, 1, 1]) === 3);
