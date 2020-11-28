function combine(input1: number | string, input2: number | string, resultType: 'asText' | 'asNumber') {
	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'asNumber') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
    }

    return result;
    
    // if (resultType === 'asNumber') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30, 26, 'asNumber');
console.log(combinedAges);

const namesAsNumbers = combine('Max', 'Anna', 'asText');
console.log(namesAsNumbers);

const combinedNames = combine('Max', 'Anna', 'asText');
console.log(combinedNames);
