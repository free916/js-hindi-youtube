// let score = 33
let score = "33abc"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33ad" => nan
// true = 1; flase=>0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//  1=> true; 0=> flase
// ""=> flase
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);


// ********** Operations ***********
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 = "hitesh"
let str2 = "hitesh"
let str3 = str1+str2
// console.log(str3);
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+3);
// console.log(1+2+"2");

// console.log((3+3) * 5%3);

// console.log(+ture);
// console.log(+"");


// let num1, num2, num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100
// gameCounter++
++gameCounter
// console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

