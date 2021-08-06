function isLeepYear(year) {
    if (year % 400 == 0){
        console.log(year + ' is leep year');
    }
    else if (year % 4 == 0 && year % 100 != 0){
        console.log(year + ' is leep year');
    }
    else {
        console.log(year + ' is not leep year');
    }
}

isLeepYear(2020);
isLeepYear(2025);
isLeepYear(2000);
isLeepYear(1400);