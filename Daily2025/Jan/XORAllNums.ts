function xorAllNums(nums1: number[], nums2: number[]): number {
  let xor1 = 0,
    xor2 = 0;

  for (let num of nums1) {
    xor1 ^= num;
  }
  for (let num of nums2) {
    xor2 ^= num;
  }

  const contribution1 = nums2.length % 2 === 0 ? 0 : xor1;
  const contribution2 = nums1.length % 2 === 0 ? 0 : xor2;

  return contribution1 ^ contribution2;
}
