function add(n1: number,n2: number, showResult: boolean, phrase: string) {
    // console.log(typeof num1);
    // if(typeof n1 !== 'number' && typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '
add(num1, num2, printResult, resultPhrase);