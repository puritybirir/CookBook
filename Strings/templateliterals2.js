const firstName = "Purity";
const lastName = "Birir";
const hireDate = new Date('2022-04-14')

function getDaysSince (date) {
  const today = new Date;
  // get number of milliseconds in a day
  const oneDay = 24 * 60 * 60 * 1000;
  return(Math.round(Math.abs((today - date) / oneDay)))
}

employeeDetail = `Our team includes ${firstName} ${lastName}. They've been a
team member since ${hireDate}! That's ${getDaysSince(hireDate)} days.`;

console.log(employeeDetail)
