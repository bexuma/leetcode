// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    // s: hello world
    // words and spaces
    // words from 1 to 45 char
    return s.split(" ").filter(e => e !== "").pop().length;
};