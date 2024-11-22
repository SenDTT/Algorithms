function findDifference(nums1: number[], nums2: number[]): number[][] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (const value of set1) {
    if (set2.has(value)) {
      set1.delete(value);
      set2.delete(value);
    }
  }

  return [Array.from(set1), Array.from(set2)];
}
