//Write a function to update an axisting property of an object
const user = {
    name: "walves",
    age: 22
}
function updateProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): T{
    return {...obj, [key]: value};
}

console.log(updateProp(user, "age", 23))