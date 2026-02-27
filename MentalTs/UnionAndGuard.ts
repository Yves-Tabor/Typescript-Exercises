// Create a union type `Shape` and implement the `getArea` function using type guards

// type Shape = // define Circle and Rectangle
// function getArea(shape: Shape): number {
//   // Use type guards to return correct area
// }

// Create a union type `Shape` and implement the `getArea` function using type guards

// type Shape = // define Circle and Rectangle
// function getArea(shape: Shape): number {
//   // Use type guards to return correct area
// }

type Shape = { kind: 'circle', radius: number} | { kind: 'rectangle', width: number, height: number }
function getArea(shape: Shape): number{
    if(shape.kind === "circle") return Math.PI*shape.radius**2;
    else
    return shape.height*shape.width;
}
console.log(getArea({ kind: 'circle', radius: 10 }));
console.log(getArea({ kind: 'rectangle', width: 4, height: 5 }));