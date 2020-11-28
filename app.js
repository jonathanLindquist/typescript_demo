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
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READ_ONLY"] = 133] = "READ_ONLY";
    Role[Role["AUTHOR"] = 144] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Jonathan',
    age: 31,
    hobbies: ['skydiving', 'flying'],
    role: 0
};
var activities;
activities = ['cooking'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
