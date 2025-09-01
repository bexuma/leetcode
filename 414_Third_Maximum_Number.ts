https://leetcode.com/problems/third-maximum-number/description/
function thirdMax(nums: number[]): number {
    let first: number = Number.MIN_SAFE_INTEGER;
    let second: number = Number.MIN_SAFE_INTEGER;
    let third: number = Number.MIN_SAFE_INTEGER;

    for (const num of nums) {
        if (num === first || num === second || num === third) {
            continue;
        }

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        };
    };

    return third === Number.MIN_SAFE_INTEGER ? first : third;
};