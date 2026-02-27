// 1. Update the function to accept a tuple and destructure it correctly

// function greet([firstName, lastName]: string[]) {
//   return `Hello, ${firstName} ${lastName}`;
// }

// First alternative
const tuple: [string, string] = ["Yves", "Walupakah"];

function greet([firstName, lastName]: [string, string]): string{
  return `Hello, ${firstName} ${lastName}`;
}
console.log(greet(tuple));

// Second alternative
type tuple = [string, string];

function Greet([firstName, lastName]: tuple): string{
  return `Hello, ${firstName} ${lastName}`;
}
console.log(Greet(["Yves", "Walupakah"]));