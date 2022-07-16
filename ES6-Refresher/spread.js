const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

// objects

const person = {
  firstName: "Max"
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);
