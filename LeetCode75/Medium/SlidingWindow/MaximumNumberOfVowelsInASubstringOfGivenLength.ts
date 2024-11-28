function maxVowels(s: string, k: number): number {
  let maxVowels: number = 0;
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;
  let max: number = 0;
  for (let i = 0; i <= s.length; i++) {
    if (count == k) {
      maxVowels = Math.max(maxVowels, max);
      count--;
      if (vowels.includes(s[i - k])) {
        max -= 1;
      }
    }
    count++;
    max += vowels.includes(s[i]) ? 1 : 0;
  }

  return maxVowels;
}
