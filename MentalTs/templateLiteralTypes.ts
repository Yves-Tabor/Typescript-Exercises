type Unit = "px" | "%" | "rem";

type Num = number;

type Measure = `${Num}${Unit}`;

const width: Measure = "0px";
console.log(width);



