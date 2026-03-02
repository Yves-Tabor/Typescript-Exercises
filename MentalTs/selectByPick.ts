const user = {
    id: "123",
    name: "walves",
    age: 22
}
function selectProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T,K>{
    const result = {} as Pick<T, K>;
    for(const key of keys){
        result[key] = obj[key];
    }
    return result;
}

console.log(selectProperties(user, ["id", "name"]));