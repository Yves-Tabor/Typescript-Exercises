// 2. Task: Define an abstract class `Shape2D`:
//     - Abstract method `area(): number`;
    
//     Then implement:
    
//     - `Circle` subclass (property: `radius`);
//     - `Rectangle` subclass (properties: `width`, `height`);
    
//     Constructors should initialize properties, and `area()` should return correct values.

    type Shape1 = {
        radius: number;
        area(): number;
    }
    type Shape2 ={
        width: number;
        height: number;
        area(): number;
    }

    abstract class Shape2D {
        abstract area(): number;
    }
    
    class Circle extends Shape2D implements Shape1{

        public radius: number;
        constructor(rad:number){
        super();
        this.radius = rad;
        }
        
        area(): number{
            return (this.radius**2) * Math.PI;
        }
    }
    
    class Rectangle extends Shape2D implements Shape2{
        public width: number;
        public height: number;
        constructor(w: number, h: number){
            super();
            this.width = w;
            this.height = h;
        }
        area(): number{
                return this.width * this.height;
            }
    }

    const circle = new Circle(5);
    const rectangle = new Rectangle(10, 20);

    console.log(circle.area());
    console.log(rectangle.area());

