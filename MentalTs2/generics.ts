// Create a generic function `getProperty` that takes an object and a key, and returns the value of that key. Type it so TypeScript **only allows valid keys of the object**.

type Library = {
    title: string,
    author: string,
    year: number
}

function getProperty<Y, X extends keyof Y>(obj: Y, key: X) {
  return obj[key];
}

const book:Library = { title: "1984", author: "Orwell", year: 1949 };
const title = getProperty(book, "title");
console.log(title);

