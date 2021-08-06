// // create an fibonacci series with loop 
const elementNumber = 13 ;
let fibonacci = [0, 1];

for (let i = 2; i < elementNumber; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);


// fibonacci series using function

function getFibonacci(num){
    if (typeof num != "number"){
        return ("please give only valid number");
    }
    if (num < 2 ){
        return ("please give only possitive number grater than 1")
    }
    let fibonacci = [0,1];
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
}
const fibo = getFibonacci(13);
console.log(fibo);