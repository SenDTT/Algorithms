function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const backTrack = (level: number, subset: number[]) => {
        console.log(level, subset);
        if (subset.length == level) {
            result.push([...subset]);
        }

        if (level == nums.length) return;

        level++;
        subset = [];

        for (let i = 0; i < nums.length; i++) {
            subset.push(nums[i]);

            backTrack(level, subset);
        }
    }

    backTrack(0, []);
    return result;
};

console.log(subsets([1,2,3])); // [[], [1], [2], [3], [1,2], [2,3], [1,3], [1,2,3]]
console.log(subsets([0])); // [[], [0]]