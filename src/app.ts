const addTwo = (n1: number, n2: number) => {
	return n1 + n2;
};

const printingResult = (num: number): void => {
	console.log('Result: ' + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
	const result = n1 + n2;
	cb(result);
};

console.log(printingResult(addTwo(5, 12))); // prints 'undefined'

let combinedValues: (x: number, y: number) => number;
combinedValues = addTwo;
// combinedValues = printingResult; // throws error
console.log(combinedValues(8, 8));

// let someValue: undefined; // valid type

addAndHandle(10, 20, (result) => {
	console.log(result);
});
