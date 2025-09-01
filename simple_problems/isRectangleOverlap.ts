// 836. Rectangle Overlap
// https://leetcode.com/problems/rectangle-overlap/description/

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    return rec1[0] < rec2[2] && rec1[1] < rec2[3] && rec1[2] > rec2[0] && rec1[3] > rec2[1];

    // if ([...Array(4)].keys().every((i) => r1[i] === r2[i])) {
    //     return true;
    // };

    // const r1c1 = [r1[0], r1[1]];
    // const r1c2 = [r1[2], r1[3]];
    // const r2c1 = [r2[0], r2[1]];
    // const r2c2 = [r2[2], r2[3]];

    // if (r1c1[0] < r2c1[0]) {

    // }

    // return false;
};