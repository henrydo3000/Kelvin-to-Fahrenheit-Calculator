const kelvin = 0; //declare variable kelvin and assigns it value 293
let celsius = kelvin - 273; // converts kelvin to celsius
let fahrenheit = celsius * (9/5) + 32; //converts celsius to fahrenheit 

fahrenheit = Math.floor(fahrenheit); //rounds down decimal values of fahrenheit   to integerand assigns it value to fahrenheit.

console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`); // logs the value of fahrenheit onto the console.

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`the temperature is ${newton} degrees newtons`)
