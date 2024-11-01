
/*
let array = [];
let sum =0;


for(let i=0; i<2; i++){
    array[i] = Number(prompt(`value ${i+1}:`));
}

for(let i=0; i< array.length;i++){
    console.log(array[i]);
}


//FUNCTIONS
function calculate_area(width, height){

    if(width <=0 || height<=0){
        console.log("Height and width must be positive");
    }    
    let area = width*height;
    return area;
}
let width = 10;
let height = 5;
console.log(calculate_area(width,height));

*/
//Objects and Properties

let person = {
    first_name: 'Najam',
    last_name: "Irfan",
    age: 25,
    is_student: true,

    getfullname: function(){
        return this.first_name +' '+this.last_name;
    }
};


console.log(person.first_name);
console.log(person.getfullname());

person.courses = ['javascript', 'python'];
console.log(person.courses);
