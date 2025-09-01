// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
    let answer: string[] = Array(n);

    for (let i = 1; i <= n; i++) {
        let e = '';
        if (i % 3 === 0) e = 'Fizz';
        if (i % 5 === 0) e += "Buzz";
        answer[i - 1] = e === '' ? i.toString() : e;
    }

    return answer;
};