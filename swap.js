let firstNumber = 23;
let secondNumber = 12;
let temp = firstNumber ;
firstNumber = secondNumber ;
secondNumber = temp ;
console.log(firstNumber, secondNumber);

// swap two numbers using the arrays

let num1 = 21;
let num2 = 98;
[num1, num2] = [num2, num1];
console.log(num1, num2);