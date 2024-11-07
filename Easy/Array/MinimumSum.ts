// Minimum Sum

function minimumSum(nums: number[]): number {
    if (nums.length < 3) return -1;

    let minSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[j] > nums[k]) {
                    let sum = nums[i] + nums[j] + nums[k];

                    minSum = Math.min(minSum, sum);
                }
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};