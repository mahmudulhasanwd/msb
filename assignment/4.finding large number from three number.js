// 4.finding smaller number from three number

/* if else method
====================== */
let num1 = 25;
let num2 = 20;
let num3 = 10;
let min ;
if(num1 < num2 && num1 < num3) {
   min = num1;
} else if (num3 < num2 && num3 < num1) {
   min = num3;
} else {
    min = num2;
}
console.log(min);


/* switch case method
========================== */
let snum1 = 100;
let snum2 = 200;
let snum3 = 40;
let smin ;
switch(true) {
   case snum1 < snum2 && snum1 < snum3 :
      smin = snum1;
      break;
   case snum2 < snum1 && snum2 < snum3 :
      smin = snum2;
      break;
   default :
      smin = snum3
}
console.log(smin);

/* tarnary method
========================== */
let one = 125;
let two = 130;
let three = 132;
let tValue ;
(one < two && one < three ? tValue = one : two < one && two < three ? tValue = two : tValue = three);
console.log(tValue)
