function deleteGreatestValue(grid: number[][]): number {
  let result: number = 0;
  let rows: Map<number, number[]> = new Map();

  for (let i = 0; i < grid.length; i++) {
    rows.set(
      i,
      grid[i].sort((a, b) => a - b)
    );
  }

  let maxNum: number;
  while (rows.size > 0) {
    maxNum = 0;
    for (let [key, row] of rows) {
      maxNum = Math.max(row[row.length - 1], maxNum);

      if (row.length > 1) {
        rows.set(
          key,
          row.filter((value, key) => key < row.length - 1)
        );
      } else {
        rows.delete(key);
      }
    }

    result += maxNum;
  }

  return result;
}
