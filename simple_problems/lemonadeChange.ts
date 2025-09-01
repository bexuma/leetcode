// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/description/

function lemonadeChange(bills: (5 | 10 | 20)[]): boolean {
    // let fives = 0;
    // let tens = 0;

    // bills.forEach((bill, index) => {
    //     console.log(index, fives, tens);
    //     if (bill === 5) {
    //         fives++;
    //     } else if (bill === 10) {
    //         fives--;
    //         tens++;
    //     } else if (bill === 20) {
    //         if (tens > 0) {
    //             tens--;
    //             fives--;
    //         } else {
    //             fives -= 3;
    //         };
    //     };
    //     if (fives < 0) {
    //         return false;
    //     };
    // });

    for (let i = 0, fives = 0, tens = 0; i < bills.length; i++) {
        if (bills[i] === 5) fives++;
        else if (bills[i] === 10) --fives, tens++;
        else tens > 0 ? (tens--, fives--) : fives -= 3;
        if (fives < 0) return false;
    }

    return true;
};