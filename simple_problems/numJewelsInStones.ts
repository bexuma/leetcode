// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/description/

function numJewelsInStones(jewels: string, stones: string): number {
    // INPUT
    // Are 'stones' values ordered? If so, using charCodeAt() returningASCII code might be more performant and reduct the N complexity. Most likely would not work if 'stones' is unsorted.

    // SOLUTIONS, assuming I can use the built-in JavaScript libraries
    // use Set?
    // use ASCII?
    // Regex might be the fastest?

    // Solution 2: Set
    let count: number = 0;

    const jewelsSet = new Set();

    jewels.split("").forEach(c => {
        jewelsSet.add(c);
    });

    stones.split("").forEach(c => {
        if (jewelsSet.has(c)) count++;
    });

    return count;

    // // Solution 1: most straightforward for loop
    // let count: number = 0;

    // stones.split('').forEach((c) => {
    //     if (jewels.includes(c)) {
    //         count++;
    //     };
    // });

    // return count;

  
};