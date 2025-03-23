function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (n == 1 || edges.length == 0) return false;
    
    const degrees: number[] = [];

    for (const [u, v] of edges) {
        degrees[u]++;
        degrees[v]++;
    }

    if (degrees.reduce((sum, cur) => sum + cur, 0) / 2 == n) {
        let isTwoDegrees = true;
        for (let degree of degrees) {
            isTwoDegrees = isTwoDegrees && degree == 2;
        }

        if (isTwoDegrees) return true;
    }

    let components: number = 0;
    const stack: number[] = [];
    stack.push(0);
    const visited: Map<number, number> = new Map();
    visited.set(0, 1);
    while (visited.size < n) {
        components++;

        while (stack.length > 0) {
            const u = stack.pop()!;
            let w: number | null = null;
             
            for (const [x, y] of edges) {
                if (x != u && y == u && !visited.has(x)) {
                    w = x;
                    break;
                } else if (y != u && x == u && !visited.has(y)) {
                    w = y;
                    break;
                }
            }

            if (w !== null) {
                // visited.
            }
        }
    }

    return false;
}

console.log(validPath(3, [[0,1], [1,2], [0,2]], 0, 2) == true);