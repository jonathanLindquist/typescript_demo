// code goes here

const fun = (item: string): void => {
	console.log(item);
};

fun('hello jonathan');

const hobbies = [ 'sports', 'cookings' ];
console.log(hobbies[0]);

const activeHobbies = [ 'water boarding','hiking', ...hobbies ];
console.log(activeHobbies);

const person = {
	firstName: 'Jonathan',
	age: 31
};

const copiedPerson = {
	...person
};
copiedPerson.firstName = 'copied Jonathan';

console.log(person);
console.log(copiedPerson);

const restFunction = (...args: number[]) => {
	const result = args.reduce((total, currentValue) => {
		return total + currentValue;
	}, 0);
	console.log(result);
};

restFunction(1, 2, 3, 4, 5);

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1)
console.log(hobby2)
console.log(remainingHobbies)


const { firstName: personName, age } = person;

console.log(personName)
console.log(age)