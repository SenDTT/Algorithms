function reverseStr(s: string, k: number): string {
  let result: string = "";
  let index: number = 0;
  let isReverse: boolean = true;

  while (index < s.length) {
    let i = index;
    let sub = "";
    while (i < index + k) {
        if (isReverse) {
          sub = s[i] + sub;
        } else {
          sub += s[i];
        }
        i++;
        if (i == s.length) break;
    }
    result += sub;

    index = i;
    isReverse = !isReverse;
  }

  if (index < s.length) {
    result += s.substring(index);
  }
  
  return result;
}

console.log(reverseStr("abcdefg", 2) == "bacdfeg");