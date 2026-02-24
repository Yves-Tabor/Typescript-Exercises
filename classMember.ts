class Person{
  constructor(protected name:string){}
  getName():string{
      return this.name;
  }
}
    class Id extends Person{
        protected readonly other:string = "Tabor";
        showId(){
            // this.other = "Walupakah"
            return this.getName()+" "+ this.other;
        }
    }

const newId = new Id("Yves");
console.log(newId.showId())