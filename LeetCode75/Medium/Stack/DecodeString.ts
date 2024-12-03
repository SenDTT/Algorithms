function decodeString(s: string): string {
  let arr: (string | number)[] = [];
  let decoded_str: string = "";
  let numStr: string = "";

  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      decoded_str += s[i];
    } else if (/[0-9]/.test(s[i])) {
      numStr += s[i];
    } else if (s[i] === "[") {
      if (decoded_str != "") {
        arr.push(decoded_str);
        decoded_str = "";
      }
      arr.push(Number(numStr));
      numStr = "";
    } else if (s[i] === "]") {
      console.log(arr);
      let num = arr.pop() as number;
      let temp = decoded_str;
      while (num > 1) {
        decoded_str += temp;
        num--;
      }

      if (typeof arr[arr.length - 1] == "string") {
        decoded_str = arr.pop() + decoded_str;
      }
    }
  }

  return decoded_str;
}
console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));