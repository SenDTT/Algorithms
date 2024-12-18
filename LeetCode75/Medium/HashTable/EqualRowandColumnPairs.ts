function equalPairs(grid: number[][]): number {
  let rows: Map<number, string> = new Map();
  let cols: Map<number, string> = new Map();

  for (let i = 0; i < grid.length; i++) {
    rows.set(i, grid[i].join(","));

    for (let j = 0; j < grid[i].length; j++) {
      const prev = cols.get(j) || "";
      cols.set(j, (prev ? `${prev},` : "") + grid[i][j]);
    }
  }

  let count: number = 0;
  for (const row of rows.values()) {
    for (const col of cols.values()) {
      if (row === col) {
        count++;
      }
    }
  }

  return count;
}
