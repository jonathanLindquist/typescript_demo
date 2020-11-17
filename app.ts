function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // console.log(typeof n1);
    let result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	}
}

const number1 = 5;
const number2 = 2.8;
const printResult = typeof number1 === 'number' && typeof number2 === 'number';
const phrase = 'Result is ';

const result = add(number1, number2, printResult, phrase);
console.log(result);
