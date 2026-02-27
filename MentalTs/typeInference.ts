// 1. Fix typing issues and preserve return type inference
// const makeAdder = (x) => {
//   return (y) => x + y;
// };

// const add5 = makeAdder(5);
// const result = add5(10); // should be number

const makeAdder = (x: number) => {
  return (y: number) => x + y;
};

const add5 = makeAdder(5);
const result = add5(10); 


console.log(result);
console.log (typeof result)