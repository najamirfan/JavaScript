//all array methods
/*
let numbers =[1,2,3,4,5,6];

console.log("array in start:",numbers);

numbers.push(10);
console.log("array after push:",numbers);

numbers.pop();
console.log("array after pop:",numbers);

numbers.shift();
console.log("array after shift:",numbers);


numbers.unshift(20);
console.log("array after unshift:",numbers);

numbers.sort((a,b) => a-b);
console.log("array after sort:",numbers);

let filterarray = numbers.filter(num=> num>4);
console.log("array after filter:",filterarray);

*/
// all string methods

let string = 'my name is najam and i am 25 years old';

console.log('original string:', string);


let upercase = string.toUpperCase();
console.log('uper case string:', upercase);

let lowercase =string.toLowerCase();
console.log('lower case string:', lowercase);

let wordscount = string.split(" ").length;
console.log('length:', wordscount);

let reversestring = string.split("").reverse().join("");
console.log('reverse string :', reversestring);

let erasespaces = string.split(" ").join("");
console.log('without spaces:', erasespaces);