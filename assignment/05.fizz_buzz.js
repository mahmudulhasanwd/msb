// 5. find a number which is devided by 5 or 11 or 5 and 11 both

/* if else method
====================== */
let number = 15;
if(number % 5 == 0 && number % 11 == 0) {
   console.log(number + ' is divided by 5 and 11');
} else if (number % 5 == 0) {
   console.log(number + ' is only divided by 5');
} else if (number % 11 == 0) {
   console.log(number + ' is divided by 11');
} else {
   console.log('nothing');
}

/* switch case method
====================== */
let snum = 55;
switch(true) {
   case snum % 5 == 0 && snum % 11 == 0 :
      console.log(snum + ' is devided by 5 and 11');
      break;
   case snum % 5 == 0 :
      console.log(snum + ' is deveide by 5');
      break;
   case snum % 11 == 0 :
      console.log(snum + ' is devided by 11');
      break;
   default:
      console.log(snum + ' is not devided by any number');
}

/* tarnary  method
====================== */
let tnum = 155465684;
let result = (tnum % 5 == 0 && tnum % 11 == 0 ? tnum + ' is devided by 5 and 11' : tnum % 5 == 0 ? tnum + ' is deveided by 5' : tnum % 11 == 0 ? tnum + 'is deveided by 11': tnum + ' is not devided by any number');
console.log(result);


