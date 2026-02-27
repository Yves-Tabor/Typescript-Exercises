// 1. Write a function `isDefined` that acts as a type guard

// function isDefined<T>(value: T): boolean {
//   return value !== undefined && value !== null;
// }

// const list = [1, 2, null, 4, undefined];
// const filtered = list.filter(isDefined); // number[]

function isDefined<T>(value: T | undefined | null): value is T{
  return value !== undefined && value !== null;
}

const list = [1, 2, null, 4, undefined];
const filtered = list.filter(isDefined);
console.log(filtered)