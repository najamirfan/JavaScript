//********************************************************
// double equal and triple equal 
/*
let a =10;
let b ="10";

console.log("a = ",a);
console.log("b = ",b);

//no concern with the datatype, it will just check the value
// if the value is same it will return true
if( a == b){
    console.log("true");
}else{
    console.log("false");
}

//using triple equal-> it will check datatype also if the datatype is not same it will return false
if( a === b){
    console.log("true");
}else{
    console.log("false");
}
//********************************************************
//ternary operator
//in same line, statement and if and else both


let age = 19;

let result =  age > 18? "adult" : "not adult";
console.log(result);

//********************************************************

// switch  statement
let value = 10;

switch(value){
    case 1:
        console.log("value is 1");
        break;
    case 5:
        console.log("value is 5");
        break;
    case 9:    
    case 10:
        console.log("value is 9 or 10");
        break;
}

//********************************************************


//PRACTICE QUESTION
// GET A NUMBER FROM USER AND CHECK IS THE MULTIPLE OF 5 OR NOT

let number = prompt("Enter a number: ");

if (number % 5 == 0){
    console.log("yes");
}else{
    console.log("no");
}
*/

// QUESTION GRADE CALCULATION 

let marks = prompt("enter your marks:");

if (marks >= 80 && marks <= 100) {
    console.log("Grade = A");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade = B");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade = C");
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade = D");
} else if (marks >= 0 && marks <= 49) {
    console.log("Grade = F");
} else {
    console.log("INVALID INPUT");
}