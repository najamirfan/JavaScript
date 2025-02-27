//for loop
//print values from 1 to given number
/*
let number = parseFloat(prompt("enter a number:"));

//for printing in multiple line
for (let i=0; i <=number; i++){
    console.log("i = ", i+1);
}
// for printing in single line 
/*
for (let i=0; i <=number; i++){
    document.write( i+1, " ");
}


//**************************************************88
//while loop
let number = parseFloat(prompt("enter a number:"));

let i = 1;
while(i <= number){
    console.log("i = " ,i);
    i++;
}

//**************************************************
//for of loop
let str = "Najam Irfan";

//it will print the characters of string
for (let i of str) {
    console.log("i = ", i);
}

*/

//**************************************************
//for in loop
let person = {
    name: "Najam Irfan",
    age: 25,
    student: true
}
// it will return the keys of object
for (let key in person) {
    console.log(key, "=", person[key]);
}
