function findAllComponentsDFS(n: number, edges: number[][]): number[][] {
    const graph: Map<number, number[]> = new Map();

    for (const [u, v] of edges) {
      if (!graph.has(u)) graph.set(u, []);
      if (!graph.has(v)) graph.set(v, []);
      graph.get(u)!.push(v);
      graph.get(v)!.push(u);
    }

    let components: number = 0;
    const visited: number[] = [];
    const stack: number[] = [0];

    while (visited.length < n) {
        components++;
        
        while (stack.length > 0) {
            const value = stack.pop()!;
            if (visited.includes(value)) continue;
            visited[value] = components;
            
            for (const neighbor of graph.get(value) || []) {
                if (!visited.includes(neighbor)) stack.push(neighbor);
            }
        }
    }

    const result: number[][] = [];
    for (let i = 0; i < n; i++) {
        if (!result[visited[i]]) result[visited[i]] = [];
        result[visited[i]].push(i);
    }

    return result;
}

console.log(findAllComponentsDFS(9, [[0,1], [0,2], [0,5], [2,6], [6,7], [5,7], [3,4], [4,8], [3,8]]));