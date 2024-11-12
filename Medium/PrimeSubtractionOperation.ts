function primeSubOperation(nums: number[]): boolean {
  if (nums.length == 0) return false;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= nums[i + 1]) {
      let newNum = nums[i] - primeLessThanN(nums[i]);
      let prev: number = newNum;
      let carry: number = 1;
      while (newNum < nums[i + 1]) {
        prev = newNum;
        newNum = nums[i] - primeLessThanN(nums[i] - carry);
        carry++;
      }
      nums[i] = prev;
    }

    console.log(nums);
    if (nums[i] >= nums[i + 1]) return false;
  }
  return true;
}

function primeLessThanN(n: number): number {
  if (n == 3) return 2;

  let isPrime: boolean;
  for (let i = n - 1; i >= 3; i--) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime == true) return i;
  }

  return 0;
}

// console.log(primeSubOperation([5, 8, 3]));
console.log(primeSubOperation([2, 2]));
// console.log(primeSubOperation([15, 20, 17, 7, 16])); // 2, 3, 5, 7, 16
// console.log(primeSubOperation([4, 9, 6, 10]));
console.log(primeSubOperation([3, 4, 10, 15, 6]));
console.log(primeSubOperation([3, 1, 6]));
