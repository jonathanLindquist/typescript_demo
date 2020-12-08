// GENERICS

// const names = ["Jonathan", "Manuel"];
const names: Array<string> = []; // string[]
// names.push(1);
names.push("hello");
names[0].split("e");

console.log(names);

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

// OUR OWN GENERICS

function merge<T extends object, R extends object>(objA: T, objB: R) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Jonathan" }, { age: 31 });
console.log(mergedObj.name);
console.log(mergedObj.age);
// console.log();

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let description =
    element.length > 0 ? "Got " + element.length : "Got no value";
  return [element, description];
}

console.log(countAndDescribe("Hi There!"));

//GENERIC KEYOF PROPERTY

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value " + obj[key];
}

console.log(extractAndConvert({ name: "Jonathan" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) == -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(4); // will fail when attempting to store number
textStorage.addItem("Jonathan");
textStorage.addItem("Dave");
console.log(textStorage);

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Jonathan" });
// objStorage.addItem({ name: "Max" });

// objStorage.removeItem({ name: "Jonathan" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // makes all items optional to create on-the-fly
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // must cast on return
}

const newNames: Readonly<string[]> = ["max", "Jonathan"];
// newNames.push("Anna"); // these two commands will fail
// newNames.pop();
