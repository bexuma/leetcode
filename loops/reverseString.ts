// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let c: string = '';

    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        // [s[left], s[right]] = [s[right], s[left]];
        c = s[left];
        s[left] = s[right];
        s[right] = c;
    };
};