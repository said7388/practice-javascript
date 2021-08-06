const array = [635, 32, 6, 23, 523, 12, 499];

let smallest = array[0];
for (let i = 1; i < array.length; i++) {
    let element = array[i];
    if (element < smallest) {
        smallest = element;
    }
}
console.log(smallest)