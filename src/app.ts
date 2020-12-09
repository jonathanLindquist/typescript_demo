function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // returned decorator function (factory style)
  return function <T extends { new (...args: any[]): { name: string } }>( //class will have name property
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      // returning new constructor function for new class
      constructor(..._: any[]) {
        // replaces original constructor on annotated class
        super(); //call original constructor
        console.log("inside nested constructor from class decorator");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
        }
      }
    };
  };
}

@Logger("LOGGING PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app") // templates run bottom-up order, so this goes first
class Person {
  name = "Jonathan";

  constructor() {
    console.log("creating person object");
  }
}

const person = new Person();
const person2 = new Person();
const person3 = new Person();

console.log(person);

// --

// property
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

// accessor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Access Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// method
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// parameter
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2 // return PropertyDescriptor supported similar to decorator on class (return new version that extends)
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Value was be positive");
    }
  }

  constructor(t: string, n: number) {
    this.title = t;
    this._price = n;
  }

  @Log3 // return PropertyDescriptor supported similar to decorator on class (return new version that extends)
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      console.log("get showMessage"); // only runs once
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "this works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);

// VALIDATION

interface ValidatorConfig {
  [property: string]: {
    [validatableProps: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "required",
    ], // add new validation prop to existing array
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "positive",
    ], // add new validation prop to existing array
  };
}

function validate(obj: any): boolean {
  const ojbValidatorConfig = registeredValidators[obj.constructor.name];
  if (!ojbValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in ojbValidatorConfig) {
    for (const validator of ojbValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("validation failure");
    return;
  }
  console.log(createdCourse);
});
