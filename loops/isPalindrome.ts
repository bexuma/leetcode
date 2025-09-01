// 123. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

function isPalindrome(s: string): boolean {
    if (s.length === 0) return true;

    const isAlphanumeric = (c: string): boolean => {
        return (c >= "0" && c <= "9") || (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
    };

    for (let l = 0, r = s.length - 1; l < r; l++, r--) {
        while (!isAlphanumeric(s[l]) && l <= r) l++;
        while (!isAlphanumeric(s[r]) && r >= l) r--;        
        if (!isAlphanumeric(s[r])) return true;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    };

    return true;
};