function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'asNumber') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultType === 'asNumber') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'asNumber');
console.log(combinedAges);
var namesAsNumbers = combine('Max', 'Anna', 'asText');
console.log(namesAsNumbers);
var combinedNames = combine('Max', 'Anna', 'asText');
console.log(combinedNames);
