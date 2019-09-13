// Functions!

// ANki??
const add = (a:number, b:number): number => {
    return a + b
}

// Type Inference works for functions when returning
// We will almost always use a Type Annotation though so that errors are caught

const add2 = (a:number, b:number) => {
    return 'string' // TS knows it's returning a string because this is a string
    // return a + b // TS knows it's a number because a and b are both numbers
}

// Named function
function divide(a: number, b: number): number {
    return a / b
}

// Anonymous function assigned to a variable
const multiply = function(a: number, b: number): number {
    return a*b;
}


// Void returning function
const logger = (message: string): void => {
    console.log(message)
}

//Error returning function
const throwError = (message: string): never => {
    throw new Error(message)
}