// 07 find day name form a number value

/* if else method
====================== */
let dayNumber = 5;
if(dayNumber == 1) {
   console.log('Saturday');
} else if (dayNumber == 2) {
   console.log('Sunday');
} else if (dayNumber == 3) {
   console.log('Monday');
} else if (dayNumber == 4) {
   console.log('Tuesday ');
} else if (dayNumber == 5) {
   console.log('Wednesday  ');
} else if (dayNumber == 6) {
   console.log('Thursday ');
} else if (dayNumber == 7) {
   console.log('Friday '); 
} else {
   console.log('wrong input');
}

/* switch case method
====================== */
let sday = 1;
switch (1) {
   case 1 :
      console.log('sonibar');
      break;
   case 2 : 
      console.log('robibar');
      break;
   case 3 :
      console.log('sombar');
      break;
   case 4 :
      console.log('mongolbar');
      break;
   case 5 :
      console.log('budbar');
      break;
   case 6 :
      console.log('brihospotibar');
      break;
   case 7 :
      console.log('shukrobar');
      break;
   default :
      console.log('wrong input');
}

/* tarnary operator method
====================== */

let tday = 100;
console.log((tday == 1 ? 'sonibar' : tday == 2 ? 'robibar' : tday == 3 ? 'sombar' : tday == 4 ? 'mongolbar' : tday == 5 ? 'budbar' : tday == 6 ? 'brihospotibar' : tday == 7 ? 'shukrobar' : 'wrong input'));




