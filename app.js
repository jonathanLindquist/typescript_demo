function add(n1, n2, showResult, phrase) {
    // console.log(typeof n1);
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = typeof number1 === 'number' && typeof number2 === 'number';
var phrase = 'Result is ';
var result = add(number1, number2, printResult, phrase);
console.log(result);
