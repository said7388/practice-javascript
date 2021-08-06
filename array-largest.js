const array = [23, 43, 91, 53, 28, 64, 12];

let largest = array[0];
for (let i = 1; i < array.length; i++) {
    let element = array[i];
    if (largest < element){
        largest = element;
    }
}

console.log(largest);