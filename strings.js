//**************************************************
//template literals
/*
let obj = {
    item: "Pen",
    price: 20
}
//normal way for printing
console.log("the cost of ", obj.item, "is ", obj.price);

//using template literals
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);




// calculate the length of a string
let name = "Najam";
console.log(name.length);



//convert strig to upper case
let str = "input is given in lower case";
let newstr = str.toLocaleUpperCase();
console.log("given string: ",str);
console.log("uppercase: ",newstr);



// convert strig to lower case
let str1 = "INPUT IS GIVEN IN UPPER CASE";
let newstr1 = str1.toLowerCase();
console.log("given string: ", str1);
console.log("lowercase: ", newstr1);


// remove white spacs from a string(remove spaces from start and end )
let str2 = "                  Input given with the   spaces      ";
let newstr2 = str2.trim();
console.log("given string: ", str2);
console.log("after trim function: ", newstr2);

*/
//*************************************************************** */

//PRACTICE QUESTION
//Prompt a user to enter their full name, generate a user name start with @ then fullname and at the end
//length of user name  ef: Najam ----> @najam5


let fullname = prompt("Full Name: ");

let newstring = fullname.toLocaleLowerCase();


//first way
let username = "@" + newstring + fullname.length;
console.log(username);


//second way
let output = `@${newstring}${fullname.length}`;
console.log(output);

