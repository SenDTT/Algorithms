/**
 * nums Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
 * return the list of integers that are present in each array of nums sorted in ascending order.
 */

function intersection(nums: number[][]): number[] {
  if (nums.length == 0) return [];

  let map: Map<number, number> = new Map(nums[0].map((value) => [value, 1]));
  for (let i = 1; i < nums.length; i++) {
    let sub = new Map();
    for (const num of nums[i]) {
      if (!sub.has(num) && nums[0].includes(num)) {
        map.set(num, (map.get(num) || 0) + 1);
      }
      sub.set(num, num);
    }
  }

  for (const [num, count] of map) {
    if (count != nums.length) {
      map.delete(num);
    }
  }

  return Array.from(map.keys()).sort((a, b) => a - b);
}
