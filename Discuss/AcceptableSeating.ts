const acceptable_seating = (seating: string[][], disallowed_pairs: string[][]): boolean => {
    let map: Record<string, number[]> = {};

    for (let i = 0; i < seating.length; i++) {
        for (let j = 0; j < seating[i].length; j++) {
            map[seating[i][j]] = [i, j];
        }
    }

    for (let [name1, name2] of disallowed_pairs) {
        const [i, j] = map[name1];
        const [x, y] = map[name2];

        if ((i == x && (y == j - 1 || y == j + 1)) || (j == y && (x == i -1 || x == i + 1))) {
            return false;
        }
    }

    return true;
}


const seating_1 = [
  ["Imani", "Anika", "Alice", "Hessa"],
  ["Rasha", "Josue", "Clari", "Simon"],
  ["Kylee", "Sevis", "Layla", "Razan"],
  ["Kaveh", "Siafa", "Leong", "Nima"],
  ["Erica", "Hilda", "Harsi", "Juana"],
  ["Lotus", "Venla", "Berna", "Nader"],
];

const disallowed_pairs_1_1 = [
  ["Razan", "Siafa"],
  ["Erica", "Lotus"],
];

const disallowed_pairs_1_2 = [
  ["Rasha", "Anika"],
  ["Alice", "Simon"],
];
console.log(acceptable_seating(seating_1, disallowed_pairs_1_1)); // false
console.log(acceptable_seating(seating_1, disallowed_pairs_1_2)); // true