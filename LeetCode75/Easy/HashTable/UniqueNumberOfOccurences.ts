function uniqueOccurrences(arr: number[]): boolean {
  let map: Map<number, number> = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let occurs: number[] = Array.from(map.values());
  occurs.sort((a, b) => a - b);

  for (let i = 0; i < occurs.length - 1; i++) {
    if (occurs[i] == occurs[i + 1]) return false;
  }

  return true;
}
