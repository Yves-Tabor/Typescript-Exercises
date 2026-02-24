abstract class Registration{
    constructor(protected name: string){}
    start(){
        return "Registration for " + this.name;
    }
    abstract end():void
}
class Add extends Registration{
    end(): string{
        return this.start() +"\nThanks for your registration "+ this.name;
    }
}

const Student = new Add("John");
console.log(Student.end());
