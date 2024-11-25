function reverseWords(s: string): string {
  const arr: string[] = s.trim().split(" ").filter(s => s != "");
  let result: string[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result.join(" ");
}


console.log(reverseWords("a good   example")); // "example good a"