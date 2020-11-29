"use strict";
var addTwo = function (n1, n2) {
    return n1 + n2;
};
var printingResult = function (num) {
    console.log('Result: ' + num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
console.log(printingResult(addTwo(5, 12))); // prints 'undefined'
var combinedValues;
combinedValues = addTwo;
// combinedValues = printingResult; // throws error
console.log(combinedValues(8, 8));
// let someValue: undefined; // valid type
addAndHandle(10, 20, function (result) {
    console.log(result);
});
