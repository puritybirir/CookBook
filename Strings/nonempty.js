// You want to verify that a variable is defined, is a string, and is not empty before you use it.

// check that variable is string


let firstName = "Gina"
let lastName = new String("Beki");

let list = ["Yellow", "Green"];
let list2 = new Array("Hazel", "hddh");

let x = {}
let y = new Object()

// if(typeof firstName === 'String'){
//   console.log(firstName);
// }

function stringCheck (str) {
  // check if it is a string and it has items in it. Non-zero
  if(typeof firstName === "string" && firstName.trim().length > 0){
    console.log(firstName)
  } else {
    console.log("Not a string")
  }
}

// how to check for string using the string object.

function string2Check (str) {
  if (typeof unknownVariable === 'string' || String.prototype.isPrototypeOf(unknownVariable)) {
    console.log(firstName)
  }
}

stringCheck();
