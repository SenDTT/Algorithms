function removeStars(s: string): string {
  let result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*" && result.length > 0) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
}
