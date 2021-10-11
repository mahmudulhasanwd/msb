// 3.finding large number from two number

/* if else method
====================== */
const num1 = 500;
const num2 = 50;
let maxValue;
if (num1 > num2) {
   maxValue = num1;
} else {
   maxValue = num2;
}
console.log(maxValue);

/* switch case method
====================== */
let snum1 = 120;
let snum2 = -124;
let smaxValue;
switch(true) {
   case snum1 > snum2 :
      smaxValue = snum1;
      break;
   default : 
      smaxValue = snum2;
}
console.log(smaxValue);

/* ternary  method
====================== */
let tnum = 50;
let tnum2 = 100;
let tmax ;
(tnum > tnum2 ? tmax = tnum :tmax = tnum2 );
console.log(tmax);
