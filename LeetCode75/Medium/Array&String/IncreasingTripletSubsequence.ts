// Increasing Triplet Subsequence
function increasingTriplet(nums: number[]): boolean {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }

    return false;
};

console.log(increasingTriplet([1, 5, 0, 4, 1, 3])); // true
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
