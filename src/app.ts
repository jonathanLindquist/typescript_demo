// TYPEGUARDS

type Admin = {
	name: string;
	priviledges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface Admin {
// 	name: string;
// 	priviledges: string[];
// };

// interface Employee {
// 	name: string;
// 	startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
	name: 'Jonathan',
	priviledges: [ 'create-server' ],
	startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type UniversalNumber = Combinable & Numeric;

function addCombinable(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name);
	if ('priviledges' in emp) {
		// in keyword is allowed to check TS custom types
		console.log('Priviledges: ' + emp.priviledges);
	}
	if ('startDate' in emp) {
		console.log('Start Date: ' + emp.startDate);
	}
	// if (typeof emp == 'Employee') { // typeof can only be applied to native JS types, not custom TS types

	// }
}

printEmployeeInformation(e1);

class Car {
	drive() {
		console.log('Driving Car...');
	}
}

class Truck {
	drive() {
		console.log('Driving Truck...');
	}

	loadCargo(amount: number) {
		console.log('Loading Cargo...' + amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) { // will only work with 'types', not 'interfaces'
		// instanceof keyword is JS, will look at contructor after compilation to determine type
		vehicle.loadCargo;
	}
}

useVehicle(v1);
useVehicle(v2);
