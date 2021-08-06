/*
Javascript has 3 typeof dataTypes
1. numberType
2. stringType
3. booleanType
and another data type is object type
*/

let num1 = 43 ;
console.log(typeof(num1));
// ******
var firstName = "Abu said";
console.log(typeof(firstName));
// ***********
var isNumber = true;
console.log(typeof(isNumber));


// change dataTypes
let num = "54.4" ;
console.log(typeof(num));

var convertNum = parseInt(num);
console.log(convertNum);
console.log(typeof(convertNum));

// convert to float type 
var convertFloat = parseFloat(num);
console.log(convertFloat);