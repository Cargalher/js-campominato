//function to generate two random numbers 

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//we call the function in our case is; randomIntFromInterval(1, 100) to have random numbers between 1 and 100;
//console.log(randomIntFromInterval(1, 100));

//we create a variable array to store the random numbers
var randomNumber = [];
console.log(randomNumber);

//we use a while loop to generate 16 random numbers
while(randomNumber.length<15){
  
  //we store the random number (calling the function) in a variable numberToInsert
  var numberToInsert = randomIntFromInterval(1, 100);
  
  //we use a if statement to insert numberToInsert in the array randomNumber, only if is not already contained in the array
  if(randomNumber.includes(numberToInsert) === false) {
    //if the condition is false we push the number in the array
    randomNumber.push(numberToInsert);
  }
  //console.log(randomNumber);
}

console.log(randomNumber);