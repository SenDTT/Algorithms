function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  let subs: number[][] = [];

  let index: number = 0;
  let sub: number[] = [];
  while (index < nums.length) {
    if (sub.length > 1 && nums[index] != nums[sub[sub.length - 1]] + 1) {
      subs.push(sub);
      sub = []; // reset array
    }

    if (sub.length > 0 && nums[sub[sub.length - 1]] + 1 == nums[index]) {
      sub.push(index);
    } else {
      if (sub.length > 1) subs.push(sub);
      sub = [index]; // reset array
    }

    index++;
  }

  if (sub.length > 0) subs.push(sub);
  console.log(subs);

  if (subs.length == 1) {
    let firstArr = subs[0];
    return k == 1 || firstArr[0] == k || firstArr[firstArr.length - 1] == k;
  }
  for (let i = 0; i < subs.length - 1; i++) {
    let firstIndex: number = subs[i][0];
    for (let j = i + 1; j < subs.length; j++) {
      if (firstIndex + k == subs[j][0]) {
        return true;
      }
    }
  }
  console.log("  -  ");
  return false;
}

console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3));
console.log(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5));
console.log(hasIncreasingSubarrays([-15, 19], 1));
console.log(hasIncreasingSubarrays([-3, -19, -8, -16], 2));
console.log(hasIncreasingSubarrays([5, 8, -2, -1], 2));
console.log(hasIncreasingSubarrays([-15, -13, 4, 7], 2));
console.log(hasIncreasingSubarrays([-5, -4], 1));
console.log(hasIncreasingSubarrays([-5, 19, -2], 1));
