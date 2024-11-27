function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  let minHeight;

  while (left <= right) {
    minHeight = Math.min(height[left], height[right]);
    max = Math.max(max, minHeight * (right - left));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
