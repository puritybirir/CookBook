// Arrow functions all the issues with the this keyword

function printMyName (firstName) {
  console.log(firstName);
}

printMyName("Max")


const printName = secondName => {
  console.log(secondName)
}

printName('Nadia');


const multiply = number => number * 2;

console.log(multiply(2))
