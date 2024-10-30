//creating an object
let person = {

    firstname: 'Najam ',
    lastname: 'Bajwa',
    age: 26
}
console.log(person); 

//Dot Notation
console.log(person.firstname);

//Bracket Notation
console.log(person['firstname']);


//Array
let selectedcolors = ['red', 'blue'];
selectedcolors[2] ='green'; //adding one more element
selectedcolors[3] = 1;
console.log(selectedcolors);


//functions
function greet(name){
    console.log('Hello, '+ name);
}

greet('Najam Bajwa');
greet('Java Script');

//square function
function sqaure(number){
    return  number * number;
}

let number = prompt('Number:'); //take input from user
console.log(sqaure(number));
