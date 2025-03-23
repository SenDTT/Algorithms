function addDigits(num: number): number {
  if (num < 10) return num;

  let result: number;
  while (num > 9) {
    result = 0;

    while (num > 0) {
      result += num % 10;
      num = Math.floor(num / 10);
    }

    num = result;
  }

  return num;
}
