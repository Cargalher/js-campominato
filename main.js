// Campominato

//function to generate two random numbers 

function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random()*(max - min + 1) + min);
  }

//we call the function in our case is; randomNumber(1, 100) to have random numbers between 1 and 100;
//console.log(randomNumber(1, 100));

//we create a variable array to store the random numbers
// Our variables
var diff = Number (prompt('Insert level 0/1/2'));
var list_bomb = [];
var bomb;
var num_max ;
var score = 0;

var list = [];

if (diff == 0){
  num_max = 100;
}else if(diff == 1){                    /*  <======BONUS PART  */
  num_max = 80;
}else if(diff == 2){
  num_max = 50;
}

var chance = num_max- 16;

//we use a while loop to generate 16 random numbers
while(list_bomb.length < 16){
  bomb = randomNumber(1, num_max);

    if(!list_bomb.includes(bomb)){
      list_bomb.push(bomb);
    }

}
console.log(list_bomb);


 do{
   var user_num = Number (prompt('Insert a Number'));

   if(list_bomb.includes(user_num)){
     alert('You Lose!Total score: ' + score);
   }else if(list.includes(user_num)){
    alert('Number already inserted!');
   }else if(user_num < 1 || user_num > num_max){
   }else{
    list.push(user_num);
    score = score + 1;
   }
   
 }while(list.length < chance && !list_bomb.includes(user_num));

 if(list.length == chance){
  alert('You win!');
}




console.log(list);
console.log(score);