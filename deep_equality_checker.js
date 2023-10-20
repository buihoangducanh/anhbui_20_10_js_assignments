// Deep Equality Checker:
// Write a function that checks if two objects are deeply equal.

function deepEqualityChecker(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const object1_keys = Object.keys(obj1);
  const object2_keys = Object.keys(obj2);

  if (object1_keys.length !== object2_keys.length) {
    return false;
  }
  for (let key of object1_keys) {
    if (
      !object2_keys.includes(key) ||
      !deepEqualityChecker(obj1[key], obj2[key])
    ) {
      return false;
    }
  }

  return true;
}

const p1 = {
  name: "anhbui",
  age: 21,
  job: {
    title: "dev",
    pos: "fresher",
  },
};
const p2 = {
  name: "anhbui",
  age: 21,
  job: {
    title: "dev",
    pos: "fresher",
  },
};
const p3 = {
  name: "anhbui",
  age: 211,
  job: {
    title: "dev",
    pos: "fresher",
  },
};

console.log(deepEqualityChecker(p1, p2));
console.log(deepEqualityChecker(p1, p3));
