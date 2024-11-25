function mergeAlternately(word1: string, word2: string): string {
  let merged = "";
  const len = Math.max(word1.length, word2.length);

  for (let i = 0; i < len; i++) {
    if (i < word1.length) {
      merged += word1[i];
    }

    if (i < word2.length) {
      merged += word2[i];
    }
  }

  return merged;
}

// Example usage
const word1 = "abc";
const word2 = "pqrxyz";
console.log(mergeAlternately(word1, word2)); // Output: "apbqcrxyz"
