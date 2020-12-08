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
  name: "Jonathan",
  priviledges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type UniversalNumber = Combinable & Numeric;

function addCombinable(a: number, b: number): number;
function addCombinable(a: string, b: string): string;
function addCombinable(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// FUNCTION OVERLOADS

const stringResult = addCombinable("jonath", "asdhfjg");
stringResult.split(" ");
const numResult = addCombinable(1, 5);

// OPTIONAL CHAINING

const fetchedUserData = {
  id: "u1",
  name: "Jonathan",
  // job: { title: 'CEO', description: 'main gig' }
  // job: null
};

// old JS way of checking items
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// console.log(fetchedUserData?.job?.title);

// const userInput = null;
const userInput = ""; // treated as falsey value
// const storedData = userInput || 'DEFAULT';

const storedData = userInput ?? "DEFAULT"; // ?? only checks for 'null' or 'undefined', not falsey values

console.log(storedData);

// IN keyword

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("priviledges" in emp) {
    // in keyword is allowed to check TS custom types
    console.log("Priviledges: " + emp.priviledges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
  // if (typeof emp == 'Employee') { // typeof can only be applied to native JS types, not custom TS types

  // }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving Car...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    // will only work with 'types', not 'interfaces'
    // instanceof keyword is JS, will look at contructor after compilation to determine type
    vehicle.loadCargo;
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ('flyingSpeed' in animal) {
  // 	console.log("moving with speed: " + animal.flyingSpeed)
  // }
  // if ('runningSpeed' in animal) {
  // 	console.log("moving with speed: " + animal.runningSpeed)
  // }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 52 });

/// TYPE CASTING

// const paragraph = <HTMLInputElement>document.querySelector('p')!;
const paragraph = document.querySelector("p")! as HTMLInputElement; // remove TS null checks with !

paragraph.value = "Hello there";

// INDEX PROPERTIES

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Invalid username' }
  // id: string;
  [key: string]: string; // could be number and custom types
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
  username: "Must start with capital character",
};
