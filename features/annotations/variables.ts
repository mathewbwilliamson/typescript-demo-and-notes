let apples: number = 4;

apples = true;

console.log('[matt][tealium] apples', apples)

let speed = 'fast';

let nothingMuch: null = null;
let nothing: undefined = undefined;

let colors: string[] = ['red', 'blue', 'green'];

let myNumbers: number[] = [1, 2, 3, 4]

// classes

class Car {

}

let car: Car // variable car is an instance of Car

//Object Literal
let point: {x: number, y: number} = {
    x: 10,
    y: 20
}

// Function
// first colon is what values it takes and what values it returns
// the annotation is : (i:number) => void =
// const logNumber: (i:number) => void = (i: number) => {
//     console.log('[matt][tealium] i', i)
    
// }

// When to use type annotations, 3 cases
// 1. Function that returns the 'any' type
const json = '{"x":10, "y": 20}'
const coordinates = JSON.parse(json) // returns an 'any' type because it depends entirely on what string
// is passed in

console.log('[matt] coordinates', coordinates) // 'any' type


const json2 = '{"x":10, "y": 20}'
const coordinates2: {x: number; y: number} = JSON.parse(json2)
// JSON.parse() returns 'any' type but we define coordinates2 as an object of strings

console.log('[matt] coordinates2', coordinates2)



// 2. When we declare a variable in one line and initialize it later




let foundWord: string

foundWord = 'thing'


// 3. Variable whose type cannot be inferred correctly
// let numbers = [-10, 3, 2]
// let numberAboveZero = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         numberAboveZero = numbers[i] // Note the error
//     }
// }

// FIXED
// let numbers = [-10, 3, 2]
// let numberAboveZero: boolean | number = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         numberAboveZero = numbers[i] // Note the error
//     }
// }

// Function
// first colon is what values it takes and what values it returns
// the annotation is : (i:number) => void =
const logNumber: (i:number) => void = (i: number) => {
    console.log('[matt][tealium] i', i)
    
}