"use strict";
var age;
var year;
var salary;
age = prompt("Enter your age: ");
// year = prompt("Enter your year: ");


// if(year > 5){
//     salary = 2000;
// }else{
//     salary = 1000;
// }

// salary = (year > 5)?(2000):(1000);

// console.log(salary);

//First
// if( age > 18 ){

//     if(age < 30){
//         console.log(`Welcome!!!!`);
//     }else{
//         console.log(`Too old!!!!`);
//     }
    
// }else{
//     console.log(`Stay home!!!!`);
// }

// Second
// if( age < 18 ){
//     console.log(`Stay home!!!!`);
// }else if(age > 30){
//     console.log(`Too old!!!!`);
// }else{
//     console.log(`Welcome!!!!`);
// }

switch(true){
    case (age < 18):
        console.log(`Stay home!!!!`);
        break;
    case (age > 30):
        console.log(`Too old!!!!`);
        break;
    default:
        console.log(`Welcome!!!!`);
}

























// var age;
// var name;
// var msg;

// name = prompt("Enter your name");
// age = prompt("Enter your age");

// msg = "your name is: " + name + "\nyour age is: " + age;

// // msg = ""; // ""
// // msg = msg + "Your name is: "; // "Your name is: "
// // msg = msg + name; // "Your name is: Oleh"
// // msg = msg + "\n"; // "Your name is: Oleh\n"
// // msg = msg + "Your age is: "; // "Your name is: Oleh\nYour age is: "
// // msg = msg + age; // "Your name is: Oleh\nYour age is: 13234"

// msg = `Your name is: ${name}\nYour age is: ${age}`;

// alert(msg);