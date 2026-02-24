interface Name{
    readonly name: string,
    other: string;
    getName:()=> string
}

class Person implements Name{
    name: string;
    other: string;
    constructor(name: string, other: string){
        this.name = name;
        this.other = other;
    }
    getName(): string {
        return "My name is " + this.name;
    }
}

class Enroll extends Person{
    constructor(name: string, other: string){
        super(name, other);
    }
}
const person = new Person("John", "Doe");
console.log(person.getName());
