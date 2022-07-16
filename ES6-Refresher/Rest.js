const filter = (...args) => {
  return args.filter( el => el === 1);
}

console.log(filter(1, 2, 3))
