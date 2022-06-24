// You want to create a string representation of a number.

// Concatenate with empty string
const someNumber = 42;
const someString = 42 + " "

console.log(someNumber)
console.log(someString)

console.log(typeof(someNumber));
console.log(typeof(someString));

// explicit variable conversion

const someOtherNumber = 28;
const someOtherString = someOtherNumber.toString();

console.log(someOtherNumber);
console.log(typeof(someOtherString));

const someNumber2 = 1242.0055;

// Ask for exactly 2 decimal points. Numbers will be rounded if necessary.
const fixedString = someNumber2.toFixed(2);
console.log(fixedString)

// Ask for 5 significant digits. Scientific notation is used if necessary.
const precisionString = someNumber2.toPrecision(5);
console.log(precisionString);

// Ask for scientific notation with 2 decimal plates.
const scientificString = someNumber2.toExponential(2);
console.log(scientificString)


// format a number as US currency
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const numbertwo = 1242.0005;
const moneyString = formatter.format(numbertwo);

console.log(moneyString);
