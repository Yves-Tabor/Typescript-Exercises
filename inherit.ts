// class Person {
//     name:string;
//     constructor(input:string){
//         this.name = input
//     }
// }

// interface Name{
//     name:string;
// }

// interface Greet{
//     getName():string
// }

// class Id extends Person implements Name, Greet{
//     getName(){
//         return "My name is "+ this.name+" Tabor";
//     }
// }

// const newId = new Id("Yves");
// console.log(newId.getName());

//Actually we can inherit from more than one interface
interface Name{
    name: string;
}
interface Age{
    age?: number;
}
interface Greet extends Name, Age {greet():void}

let obj: Greet = {
    name: "Yves Tabor",
    greet() {
        return "Hi, I am "+ this.name;
    },
}
console.log(obj.greet())