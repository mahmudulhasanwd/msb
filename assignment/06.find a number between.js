// find a number between 100 to 200 and check is it odd or even number

/* if else method
====================== */
let number = 230;
if (number >= 100 && number <= 200 && number % 2 == 0) {
   console.log(number + ' is even and it is in between 100 & 200.')
} else{
   console.log('Condition Not Fulfilled.');
}


/* swtich case method
====================== */
let snumber = 150;
switch(true) {
   case snumber >=100 && snumber <= 200 && snumber % 2 == 0 :
      console.log(number + ' is even and it is in between 100 & 200.');
      break;
   default :
      console.log('Condition Not Fulfilled.');
}

/* tarnary  method
====================== */
let tnumber = 150;
console.log((tnumber >= 100 && tnumber <=200 && tnumber % 2 == 0 ? tnumber + ' is even and it is in between 100 & 200.' :'Condition Not Fulfilled.' ));
