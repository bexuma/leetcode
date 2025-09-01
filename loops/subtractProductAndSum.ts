// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

function subtractProductAndSum(n: number): number {
    let product = 1;
    let sum = 0;

    while (n >= 10) {
        product *= n % 10;
        sum += n % 10;
        n = Math.floor(n / 10);
    };
    product *= n;
    sum += n;

    return product - sum;
};