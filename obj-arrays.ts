// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Jonathan',
//     age: 31
// }

// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: 'Jonathan',
// 	age: 31,
// 	hobbies: [ 'skydiving', 'flying' ],
// 	role: [ 2, 'author' ]
// };

//possible action
// person.role.push('admin');
// person.role[1] = 4;

enum Role {
    ADMIN = 'admin',
    READ_ONLY = 133,
    AUTHOR = 144
}

const person = {
	name: 'Jonathan',
	age: 31,
	hobbies: [ 'skydiving', 'flying' ],
	role: 0
};

let activities: string[];
activities = [ 'cooking' ];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map())
}
