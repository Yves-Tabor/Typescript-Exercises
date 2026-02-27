// Type the `user` object and ensure proper autocompletion

// const user = {
//   name: "Alice",
//   age: 30,
//   isAdmin: false,
// };
// function printUserInfo(u) {
//   console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
// }

type User = {
    name: string,
    age: number,
    isAdmin: boolean
}
const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

function printUserInfo(u: User): void{
  console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
}