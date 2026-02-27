// function createPair<S, T>(v1: S, v2: T){
//     return [v1, v2];
// }
// const pair = createPair("Hello", 662);
// console.log(pair);

interface Named<S = string, T extends string | number = number>{
    name: S,
    age: T
}

class Person implements Partial<Named<string, number>>{
        public name: string;
    constructor(n: string){
        this.name = n;
    }
}