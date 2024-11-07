// Number of Arithmetic Triplets

function arithmeticTriplets(nums: number[], diff: number): number {
    let result = new Set(nums);
    let count: number = 0;
    for (let num of nums) {
        if (result.has(num - diff) && result.has(num + diff)) count++;
    }

    return count;
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2
