function minReorder(n: number, connections: number[][]): number {
  let graph: Map<number, { node: number; needsReorder: boolean }[]> = new Map();

  for (let [a, b] of connections) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a)!.push({ node: b, needsReorder: true });
    graph.get(b)!.push({ node: a, needsReorder: false });
  }

  let visited: boolean[] = new Array(n).fill(false);

  let queue: number[] = [0];
  visited[0] = true;
  let count: number = 0;

  while (queue.length > 0) {
    const node = queue.shift()!;

    for (const { node: neighbor, needsReorder } of graph.get(node)!) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);

        if (needsReorder) {
          count++;
        }
      }
    }
  }

  return count;
}

// Test the function with the provided input
const connections = [
  [1, 2],
  [2, 3],
  [4, 5],
  [3, 5],
  [2, 0],
];
console.log("Count of reorders needed:", minReorder(6, connections));

let arr = [
  [1, 0],
  [1, 2],
  [3, 2],
  [3, 4],
];
console.log("Count of reorders needed:", minReorder(5, arr));

arr = [
  [0, 1],
  [2, 0],
  [0, 3],
  [3, 4],
  [5, 0],
  [1, 6],
  [2, 7],
  [8, 1],
  [3, 9],
];
console.log("Count of reorders needed:", minReorder(10, arr));
