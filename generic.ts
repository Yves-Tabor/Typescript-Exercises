// function createPair<S, T>(v1: S, v2: T){
//     return [v1, v2];
// }
// const pair = createPair("Hello", 662);
// console.log(pair);

interface Named<S, T>{
    name: S,
    age: T
}

class Person implements Named<string, number>{
        public name: string;
        public age: number;
    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
    
}