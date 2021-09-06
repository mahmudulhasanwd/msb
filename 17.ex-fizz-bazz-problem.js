//problem : Fizz Buzz
// Take a number
// If it is divisiable by 3 then print "Fizz"
// If it is divisiable by 5 then print "Buzz"
// If it is divisiable by 3 and 5 then print "Fizz Buzz"
// Other wise print Nothing

let number = 15;
if(number % 3 == 0 && number % 5 == 0) {
   console.log('Fizz Buzz');
} else if (number % 3 == 0) {
   console.log('Fizz');
} else if (number % 5 == 0) {
   console.log('Buzz');
} else {
   console.log('nothing')
}

// fizz buzz problem soliving with ternary operator
let tnumber = 55;
let tresut = (tnumber % 3 == 0 && tnumber % 5 == 0 ? 'Fizz Buzz' : tnumber % 3 == 0 ? 'Fizz' : tnumber % 5 == 0 ? 'Buzz' : 'nothing');
console.log(tresut);


// fizz buzz problem solving with switch case
let snum = 1;
switch(true) {
   case snum % 3 == 0 && snum % 5 == 0 :
      console.log('Fizz Buzz');
      break;
   case snum % 3 == 0: 
   console.log('Fizz');
      break;
   case snum % 5 == 0 :
      console.log('Buzz');
      break;
   
   default:
      console.log('nothing');
}

// finding leap year with if else condtion
let year = 2004;
if(year % 400 === 0) {
   console.log('this is leap year');
} else if (year % 4 === 0 && year % 100 !== 0) {
   console.log('this is leap year');
} else {
   console.log('this is not leap year');
}

// finding leap year with switch case

let time = new Date;
let cyear = time.getFullYear();
switch(true) {
   case cyear % 400 === 0 :
      console.log('this is leap year');
      break;
   case cyear % 4 ===0 && cyear % 100 !== 0 :
      console.log('this is leap year');
      break;
   default : 
   console.log('this is not leap year');
}



