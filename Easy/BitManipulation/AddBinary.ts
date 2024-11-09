function addBinary(a: string, b: string): string {
  let result: string = "";
  let carry: number = 0;

  let i: number = a.length - 1;
  let j: number = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let numa = i >= 0 ? parseInt(a[i], 10) : 0;
    let numb = j >= 0 ? parseInt(b[j], 10) : 0;

    let sum = numa + numb + carry;

    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;

    i--;
    j--;
  }

  return result;
}

console.log(addBinary("11", "1")); // 100
console.log(addBinary("1010", "1011")); // 10101
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
)); // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"