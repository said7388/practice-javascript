// while loop 
let i = 1;
while (i <=10 ){
    console.log(i);
    i++;
}
// for loop  
for(i=2; i <= 10; i+=2){
    console.log(i);
}

// // break statement
for(i=0; i<= 10; i+=2){
    console.log(i);
    if (i == 6){
        break ;
    }
}

// continue statement 
for(i=0; i<=10; i+=2){
    if(i == 4){
        continue ;
    }
    console.log(i);
}
