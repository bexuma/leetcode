// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Sol 1
function subtractProductAndSum(n: number): number {
    // product x (?)
    // sum +
    // product - sum (?)

    const digits: number[] = [];

    let tmp = n;

    while (tmp >= 10) {
        digits.push(tmp % 10);
        tmp = Math.floor(tmp / 10);
    };
    digits.push(tmp);

    const product = digits.reduce((acc, cur) => acc * cur, 1);
    const sum = digits.reduce((acc, cur) => acc + cur, 0);

    return product - sum;
};