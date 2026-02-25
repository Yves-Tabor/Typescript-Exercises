// class Person{
//     name: string;
//     other: unknown;
//     id: number = 1;
//     constructor(name: string, other: unknown){
//         this.name = name;
//         this.other = other;
//     }
//     getId(): void {
//         console.log("Subject " + this.id);
//     }
// }

// class Enroll extends Person{
//         getId(): string{
//             super.getId();
//             if(typeof this.other === "number" && this.other > 18){
//             return "Succefully enrolled\nName: " + this.name + "  Age: " + this.other;
//             }
//             else{
//                 return "You are not eligible for enrollment";
//             }
//         }
// }
// const person = new Enroll("John", 23);
// console.log(person.getId());

class Person {
  constructor(public name: string = "Walves") {}
  getname(): void{
    console.log(this.name);
  }
}
class Student extends Person {
  override name: string;
    constructor(name: string){
        super(name);
        this.name = name.toUpperCase();
    }
}

new Student("John").getname();
new Person().getname();
