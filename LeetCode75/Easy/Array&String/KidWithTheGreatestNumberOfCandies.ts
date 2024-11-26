function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = 0;

  // Find the maximum number of candies any kid currently has
  for (const candy of candies) {
    max = candy > max ? candy : max;
  }

  const result: boolean[] = [];

  // Determine if each kid can have the most candies
  for (const candy of candies) {
    result.push(candy + extraCandies >= max);
  }

  return result;
}

// Example usage
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies)); // Output: [true, true, true, false, true]
