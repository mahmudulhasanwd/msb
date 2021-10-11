// 08.calculate our griding system

/* if else method
====================== */
let number = 55;
if(number >=80 && number <= 100){
   console.log('A+');
} else if (number >=70 && number <= 79) {
   console.log('A');
} else if (number >= 60 && number <= 69) {
   console.log('A-');
} else if (number >= 50 && number <= 59) {
   console.log('B');
} else if (number >= 40 && number <= 49) {
   console.log('c');
} else if (number >= 33 && number <= 39) {
   console.log('d');
} else if (number < 0 || number > 100) {
   console.log('wrong input');
} else {
   console.log('f');
}

/* switch case method
====================== */
let tnum = 220;
switch(true) {
   case tnum >= 80 && tnum <= 100 :
      console.log('A+');
      break;
   case tnum >= 70 && tnum <= 79 :
      console.log('A');
      break;
   case tnum >= 60 && tnum <= 69 :
      console.log('A-');
      break;
   case tnum >= 50 && tnum <= 59 :
      console.log('B');
      break;
   case tnum >= 40 && tnum <=49 :
      console.log('c');
      break;
   case tnum >= 33 && tnum <=39 :
      console.log('d');
      break;
   case tnum < 0 || tnum > 100 :
      console.log('wrong input');
      break;
   default :
      console.log('F')
   
}



