class Human {
  gender = "nonbinary"

  printGender = () => {
    console.log(this.gender);
  }
}


class Person extends Human{
    name = "Max";
    gender = "Transgender"


  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

