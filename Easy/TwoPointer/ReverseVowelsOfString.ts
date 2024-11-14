function reverseVowels(s: string): string {
  let left: number = 0;
  let right: number = s.length - 1;
  let leftStr: string = "";
  let rightStr: string = "";

  while (left < right) {
    while (left < right && !s[left].match(/[aeiouAEIOU]/)) {
      leftStr += s[left];
      left++;
    }

    while (right > left && !s[right].match(/[aeiouAEIOU]/)) {
      rightStr = s[right] + rightStr;
      right--;
    }

    if (left == right) {
      break;
    }

    if (s[left] !== s[right]) {
      leftStr += s[right];
      rightStr = s[left] + rightStr;
    } else {
      leftStr += s[left];
      rightStr = s[right] + rightStr;
    }

    left++;
    right--;
  }
  if (left == right) {
    leftStr += s[left];
  }
  return leftStr + rightStr;
}

console.log(reverseVowels("IceCreAm") === "AceCreIm");
console.log(reverseVowels("leetcode") === "leotcede");
console.log(reverseVowels(" ") === " ");
