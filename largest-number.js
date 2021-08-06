let number1 = 32;
let number2 = 23;
let number3 = 24;

if ((number1 > number2) && (number1 > number3)){
    console.log("largest number is :", number1);
}
else if ((number1 < number2) && (number3 < number2)){
    console.log("largest number is :", number2);
}
else{
    console.log("largest number is :", number3)
}

// other option   
let largest = Math.max(number1, number2, number3);
console.log("largest number is :", largest);