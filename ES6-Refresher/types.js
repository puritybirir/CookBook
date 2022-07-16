// Primitive types

const number = 1;
const number2 = number;

console.log(number2);

// object and arrays are reference types though

const person = {
  name: "Max"
};

const secondPerson = {...person};

// persons name does not change as the spread operator creates an actual copy.
person.name = "Behive"

console.log(secondPerson);
