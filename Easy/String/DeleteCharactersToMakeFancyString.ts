// Delete Characters to Make Fancy String
function makeFancyString(s: string): string {
  let result: string = "";
  let count: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (result.length > 0 && result[result.length - 1] == s[i]) {
      count++;
    } else {
      count = 0;
    }

    if (count < 2) {
      result += s[i];
    }
  }

  return result;
}

console.log(makeFancyString("leeetcode"));
console.log(makeFancyString("aaabaaaa"));
console.log(makeFancyString("aab"));
