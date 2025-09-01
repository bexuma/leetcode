// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Sol 1
function subtractProductAndSum(n: number): number {
    let product = 1;
    let sum = 0;

    let tmp = n;

    while (tmp >= 10) {
        product *= tmp % 10;
        sum += tmp % 10;
        tmp = Math.floor(tmp / 10);
    };
    product *= tmp;
    sum += tmp;

    return product - sum;
};