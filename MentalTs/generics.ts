// 1. Create a generic function `wrapInArray` that returns an array containing the input value, maintaining its type.
// Usage:
// const result = wrapInArray(42); // number[]
// const result = wrapInArray("hello"); // string[]

function wrapInArray<T>(value: T): T[]{
    return [value];
}
const result = wrapInArray(42);
const result2 = wrapInArray("hello");
console.log(result);
console.log(result2);