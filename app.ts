function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResults(num: number): void {
    console.log('Result: ' + num);
}

printResults(add(10,15));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;