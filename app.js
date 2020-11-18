// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Jonathan',
//     age: 31
// }
var person = {
    name: 'Jonathan',
    age: 31,
    hobbies: ['skydiving', 'flying']
};
var activities;
activities = ['cooking'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
