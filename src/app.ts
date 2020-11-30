class Department {
	// private id: string;
	// private name: string;
	private employees: string[] = [];

	constructor(private name: string, private readonly id: string) {} // double init declaration shortcut

	describe(this: Department): string {
		return `Name: ${this.name}\nId: ${this.id}\n`; // must use 'this' to refer to current object
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeesInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super('IT', id);
		this.admins = admins;
	}
}

const itDep = new ITDepartment('12345', [ 'Jonathan', 'James' ]);
console.log(itDep.admins, itDep.describe());

const firstDepo = new Department('Fire Department', '1234');

// console.log(firstDepo.name);

console.log(firstDepo.describe());

firstDepo.addEmployee('Jonathan');
firstDepo.addEmployee('Jonah');

firstDepo.printEmployeesInfo();

// firstDepo.employees.push('Anna'); // employees is private to the outside
