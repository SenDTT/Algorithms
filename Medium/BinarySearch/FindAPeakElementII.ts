function findPeakGrid(mat: number[][]): number[] {
  let position: number[] = [];

  for (let i = 0; i < mat.length; i++) {
    position = [i, 0];

    let left = 0;
    let right = mat[0].length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (i < mat.length) {
        console.log(
          [i, mid],
          mat[i][mid],
          mat[i][mid + 1] || -1,
          mat[i][mid - 1] || -1,
          i > 0 ? mat[i - 1][mid] : -1,
          i == mat.length - 1 ? -1 : mat[i + 1][mid]
        );
      }

      if (
        mat[i][mid] > (mat[i][mid + 1] || -1) &&
        mat[i][mid] > (mat[i][mid - 1] || -1) &&
        mat[i][mid] > (i > 0 ? mat[i - 1][mid] : -1) &&
        mat[i][mid] > (i == mat.length - 1 ? -1 : mat[i + 1][mid])
      ) {
        position = [i, mid];
        return position;
      } else if (
        mat[i][mid] < (mat[i][mid + 1] || -1) &&
        mat[i][right] > mat[i][left]
      ) {
        left = mid + 1;
      } else if (mat[i][mid] < (mat[i][mid - 1] || -1)) {
        right = mid - 1;
      } else {
        left++;
        right--;
      }
    }
  }

  return position;
}

// console.log(
//   findPeakGrid([
//     [45, 35, 27, 15, 29],
//     [38, 18, 1, 49, 11],
//     [45, 28, 22, 18, 10],
//     [14, 49, 7, 6, 25],
//     [7, 23, 39, 17, 3],
//   ])
// ); // [4, 2]

// console.log(
//   findPeakGrid([
//     [47, 30, 35, 8, 25],
//     [6, 36, 19, 41, 40],
//     [24, 37, 13, 46, 5],
//     [3, 43, 15, 50, 19],
//     [6, 15, 7, 25, 18],
//   ])
// ); // [0, 2]

// console.log(
//   findPeakGrid([
//     [1, 2, 6],
//     [3, 4, 5],
//   ])
// ); // [0, 2]

console.log(
  findPeakGrid([
    [10, 50, 40, 30, 20],
    [1, 500, 2, 3, 4],
  ])
); // [1, 1]
