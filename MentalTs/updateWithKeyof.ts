//Write a function to update an existing property of an object
// First alternative: updating with a given new value
const user = {
    name: "walves",
    age: 22
}
// function updateProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): T{
//     return {...obj, [key]: value};
// }

// console.log(updateProp(user, "age", 23))

// Second alternative: updating with a partial object that will override properties
function mergeObjects <T>(obj: T, obj2: Partial<T>): T{
    return {...obj, ...obj2};
}

console.log(mergeObjects(user, { name: "Bob" }))