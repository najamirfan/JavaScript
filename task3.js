let number = Number(prompt("Enter Number:"));
// FOR CHECKING NUMBER IS POSITVE OR NEGATIVE
if(number > 0){
    console.log("POSITIVE");
}else if( number < 0){
    console.log("NEGATIVE");
}
else{
    console.log("ZERO");
}


// FOR CHECKING NUMBER IS EVEN OR ODD
if(number%2 == 0){
    console.log("EVEN");
}else if( number%2 != 0){
    console.log("ODD");
}
else{
    console.log("iNVALID INPUT");
}