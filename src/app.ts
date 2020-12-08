interface Named {
    readonly name: string;
    outputName?: string; // optional
}

interface AnotherInterface {}

//multiple interface extension
interface Greetable extends Named, AnotherInterface {
	greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    outputName: string;
    age = 31;

	constructor(name: string, outputName?: string) {
		this.name = name;
        this.outputName = outputName ? outputName : name
	}

	greet(phrase: string): void {
		console.log(phrase);
	}
}

let user1: Greetable;

user1 = new Person('Jonathan');
user1.name;

user1.greet("hi there, I'm ");

// type AddFn = (n1: number, n2: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => {
// 	return n1 + n2;
// };

// Function interface
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}
