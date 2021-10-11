// 2.find out possitive or negative number

/* if else method
====================== */
let num = -5;
if(num >= 0) {
   console.log('this is possitive number');
} else{
   console.log('this is negative number');
}

/* switch case method
   ======================= */
let num1 = 10;
switch(true) {
   case num1 >=0 :
      console.log('this is possitve number');
      break;
   default :
      console.log('this is negative number');
}

/* tarnary operator method
   ======================= */
let num2 = -50005865654;
console.log((num2 >= 0 ? 'this is possitive number' :'this is neagative number' ));

