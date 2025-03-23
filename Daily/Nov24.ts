function maxMatrixSum(matrix: number[][]): number {
  let max: number = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let sum1 = matrix[i][j] + matrix[i][j + 1];
      let sum2 = matrix[i][j] * -1 + matrix[i][j + 1] * -1;

      if (sum2 >= sum1) {
        matrix[i][j] *= -1;
        matrix[i][j + 1] *= -1;
      }

      if (i < matrix.length - 1) {
        sum1 = matrix[i][j] + matrix[i + 1][j];
        sum2 = matrix[i][j] * -1 + matrix[i + 1][j] * -1;

        if (sum2 >= sum1) {
          matrix[i][j] *= -1;
          matrix[i + 1][j] *= -1;
        }
      }

      if (i == 0 && j == 0) {
        max += matrix[i][j];
      }

      max += matrix[i][j + 1] + (i < matrix.length - 1 ? matrix[i + 1][j] : 0);

      console.log(max);
    }
  }
  console.log(matrix, max);
  return max;
}

console.log(
  maxMatrixSum([
    [1, -1],
    [-1, 1],
  ]) == 4
); // 4

console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ]) == 16
); // 16

console.log(
  maxMatrixSum([
    [-1, 0, -1],
    [-2, 1, 3],
    [3, 2, 2],
  ]) == 15
); // 15
