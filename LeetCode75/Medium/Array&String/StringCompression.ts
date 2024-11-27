function compress(chars: string[]): number {
  let index: number = 0;
  let count: number = 0;
  let prev: string = "";
  let temp: number[] = [];

  for (let i = 0; i <= chars.length; i++) {
    if ((prev != "" && prev != chars[i]) || i == chars.length) {
      chars[index++] = prev;
      if (count > 1 && count < 10) {
        chars[index++] = count.toString();
      } else if (count >= 10) {
        while (count > 0) {
          temp.push(count % 10);
          count = Math.floor(count / 10);
        }

        for (let j = temp.length - 1; j >= 0; j--) {
          chars[index++] = temp[j].toString();
        }
        temp = [];
      }
      count = 0;
    }

    prev = chars[i];
    count++;
  }

  if (chars.length > index) {
    chars.length = index;
  }
  return chars.length;
}
