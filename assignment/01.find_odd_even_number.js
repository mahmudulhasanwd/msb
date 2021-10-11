// 1.find out odd and even number

// if else method
// ======================
let number = 4665465465465;
if(number % 2 === 0) {
   console.log(`${number} is odd number`);
} else {
   console.log(`${number} is even number`)
}

// switch case method
// ======================

let number1 = 5665645435;
switch(true) {
   case number1 % 2 == 0 :
      console.log(number1 + 'is odd number');
      break;
   default :
      console.log(number1 + ' is even number');
}


/* tarnary operator  method
=============================== */
let number2 = 45698764697981;
console.log((number2 % 2 == 0 ? number  + 'is odd number' : number + 'is even number'));
