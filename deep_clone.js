// Deep Clone:
// Create a function that performs a deep clone of an object.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const person1 = {
  name: "anh bui",
  age: 20,
};
const person2 = person1;

console.log(person2 === person1);
console.log(person1 === deepClone({ person1 }));
