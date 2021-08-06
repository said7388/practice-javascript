let random = Math.random();
random = Math.floor(random)
console.log(random)

// return random 10 number using loop

for (var i = 0; i <10; i++){
    let random = Math.random() * 10;
    random = Math.floor(random)
    console.log(random)
}

// return random number between two number

let maxNumber = 10;
let minNumber = 2;

let random = Math.random() * (maxNumber - minNumber) + minNumber;
random = Math.floor(random)
console.log(random)

// create a function for return random number

function findRandomNumber(min, max) {
    let random = Math.round(Math.random() * (max - min) + min);
    return random;
}
let randomNumber = findRandomNumber(2, 20);
console.log(randomNumber);