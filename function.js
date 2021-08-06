// declare a function
function toCelsius(fahrenheit) {
    celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}
// call a function
console.log(toCelsius(98));

// declare function with multiple parameters
function addThreeNumber (a, b, c){
    result = a + b + c;
    return result;
}
console.log(addThreeNumber(32, 54, 03))
// press variable as parameters
var num1 = 23, num2 = 54, num3 = 32 ;
var result = addThreeNumber(num1, num2, num3);
console.log(result);