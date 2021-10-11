// 1. find odd even number

let inumber = 9;
if (inumber % 2 == 0) {
   console.log('jur');
} else {
   console.log('bijur');
}

switch (true) {
   case inumber % 2 ==0 :
      console.log('jur');
      break;
   default :
      console.log('bigur')
}

console.log((inumber % 2 == 0 ? 'jur' : 'bijur'));


// 2. check postive number or negative number or zero form a number
let pn = 0;
if (pn > 0) {
   console.log('this is possitve number');
} else if (pn < 0) {
   console.log('this is negative number')
} else {
   console.log('this is zero');
}

switch (true) {
   case pn < 0 :
      console.log('this is negative');
      break;
   case pn > 0 :
      console.log('this is positive');
      break;
   default :
      console.log('this is zero');
}

console.log((pn > 0 ? 'positive' : pn < 0 ? 'negative' : 'zero'));

// 3.find max number in 2 digit
let oneNumber = 10;
let twoNumber = 30;
if(oneNumber > twoNumber) {
   console.log(` ${oneNumber} is bigger then ${twoNumber}`);
} else {
   console.log(`${twoNumber} is bigger than ${oneNumber}`);
}

switch (true) {
   case oneNumber > twoNumber :
      console.log(`${oneNumber} is gratter than ${twoNumber}`);
      break;
   default :
      console.log(`${twoNumber} is gratter than ${oneNumber}`);
}

console.log((oneNumber > twoNumber ? `${oneNumber} is bigger than ${twoNumber}` : `${twoNumber} is gratter than ${oneNumber}`));


// 4.print the smallest number for the 3 numbers
let oneNum = 50;
let twoNum = 40;
let threeNum = 60;
let numresult ;
let numresultSwitch ;

if (oneNum < twoNum && oneNum < threeNum) {
  numresult = oneNum;
} else if (twoNum < oneNum && twoNumber < threeNum ) {
   numresult = twoNum;
} else {
   numresult = threeNum;
}
console.log(numresult);

switch (true) {
   case oneNum < twoNum && twoNum < threeNum :
      numresultSwitch = oneNum;
      break;
   case twoNum < oneNum && twoNum < threeNum :
      numresultSwitch = twoNum;
      break;
   default :
      numresultSwitch = threeNum
}
console.log(numresultSwitch);

let tresult ;
(oneNum < twoNum && oneNum < threeNum ? tresult = oneNum : twoNum < threeNum && twoNum < oneNum ? tresult = twoNum :  tresult = threeNum);
console.log(tresult);

// 5. is the number is devided by 5 or 3 or 5 and 3 both
let gameOne = 356968765474987479846547987987496;
if(gameOne % 3 == 0 && gameOne % 5 == 0) {
   console.log('this number is devided by 3 and 5 both');
} else if (gameOne % 5 == 0) {
   console.log('this number is devided by 5');
}  else if (gameOne % 3 == 0) {
   console.log('this number is deveided by 3');
} else {
   console.log('nothing');
}

switch(true) {
   case gameOne % 5 == 0 && gameOne % 3 == 0 :
      console.log('this number is devided by 3 and 5 both');
      break;
   case gameOne % 3 == 0 :
      console.log('this number is devuded by 3');
      break;
   case gameTwo % 5 == 0 :
      console.log('this is number is devided by 5');
      break;
   default :
      console.log('noting');
}
console.log((gameOne % 5 == 0 && gameOne % 3 == 0 ? 'this is devided by 3 and 5 both' : gameOne % 5 == 0 ? 'this number is devided by only 5' : gameOne % 3 == 0 ? 'this number is devied by 3' : 'Nothing'));


//6. find a number between 100 to 200 and check is it odd or even number
let findNumber = 112;

if (findNumber >= 100 && findNumber <= 200 && findNumber %2 == 0) {
   console.log('Number is even and it is between 100 to 200');
} else {
   console.log('condition failed');
}

switch(true) {
   case (findNumber >= 100 && findNumber <= 200 && findNumber %2 == 0) :
      console.log('true');
      break;
   default :
      console.log(false);
}

console.log((findNumber >= 100 && findNumber <=200 && findNumber % 2 == 0 ? 'codition-sotto' :'condition mittha'));

//7.findding todays date name
let fDate = new Date();
let tDay = fDate.getDay();

if(tDay == 1) {
   console.log('Robi Bar');
} else if (tDay == 2) {
   console.log('sombar');
} else if (tDay == 3) {
   console.log('mongolbar');
} else if (tDay == 4) {
   console.log('Budbar');
} else if (tDay == 5) {
   console.log('brihospotibar');
} else if (tDay == 6) {
   console.log('shukrobar');
} else if (tDay == 7) {
   console.log('Sonibar');
} else {
   console.log('wrong Input');
}

switch (true) {
   case (tDay == 1) :
      console.log('robibar');
      break;
   case (tDay == 2) :
      console.log('sombar');
      break;
   case (tDay == 3) :
      console.log('Mongolbar');
      break;
   case (tDay == 4) :
      console.log('budbar');
      break;
   case (tDay == 5) :
      console.log('brihospotibar');
      break;
   case (tDay == 6) :
      console.log('shukrobar');
      break;
   case (tDay == 7) :
      console.log('sonibar');
      break;
   default :
      console.log('wrong input');
}

// 8. our grading system

let gMarks = 15;
if(gMarks >= 80 && gMarks <= 100) {
   console.log('A+');
} else if (gMarks >= 70 && gMarks <= 79) {
   console.log('A');
} else if (gMarks >= 60 && gMarks <= 69) {
   console.log('A-');
} else if (gMarks >= 50 && gMarks <= 59) {
   console.log('B');
} else if (gMarks >= 40 && gMarks <= 49) {
   console.log('C');
} else if (gMarks >= 33 && gMarks <= 39) {
   console.log('D');
} else if (gMarks < 0 || gMarks > 100) {
   console.log('wrong input of Marks');
} else {
   console.log('F')
}

switch (true) {
   case (gMarks >= 80 && gMarks <= 100) :
      console.log('A+');
      break;
   case (gMarks >= 70 && gMarks <= 79) :
      console.log('A');
      break;
   case (gMarks >= 60 && gMarks <= 69) :
      console.log('A-');
      break;
   case (gMarks >= 50 && gMarks <= 59) :
      console.log('B');
      break;
   case (gMarks >= 40 && gMarks <= 49) :
      console.log('c');
      break;
   case (gMarks >= 33 && gMarks <= 39) :
      console.log('D');
      break;
   case (gMarks < 0 || gMarks > 100) :
      console.log('wrong Input');
      break;
   default :
      console.log('F')
}

//9.Fizz buzz problem solving
let fbPro = 5;
console.log((fbPro % 3 == 0 && fbPro % 5 == 0 ? 'Fizz Buzz' : fbPro % 3 == 0 ? 'Fizz Only' : fbPro % 5 == 0 ? 'Buzz Only' : 'not devisbale' ));

//10. vowel or consonent
let chevc = 'A';
switch (true) {
   case (chevc == 'a' || chevc == 'e' || chevc == 'i' || chevc == 'o' || chevc == 'u' || chevc == 'A' || chevc == 'E' || chevc == 'I' || chevc == 'O' || chevc == 'U') :
      console.log('this is vowel');
      break;
   default: 
      console.log('this is consonent');
}

//11.upercase and lower case 
let check = '0';
switch(true) {
   case (check >='A' && check <='Z') :
      console.log('this is upperCase');
      break;
   case (check >='a' && check <='z') :
      console.log('this is lower case');
      break;
   default:
      console.log('wrong Input');
}

// 12.Aphabet or digit
let ad = '9';
if(ad >= 'a' && ad <= 'z' || ad >= 'A' && ad <= 'Z') {
   console.log('this is Aphabet');
} else if (ad >= 0 && ad >= 9) {
   console.log('this is Digit');
} else {
   console.log('this is special cherector')
}

// 13.how much cherector in a number
let cnumber = 999989;
if(cnumber >=0 && cnumber <=9) {
   console.log('1 che');
} else if (cnumber >=10 && cnumber <=99) {
   console.log('2 che');
} else if (cnumber >=100 && cnumber <=999) {
   console.log('3 che');
} else if (cnumber >=1000 && cnumber <=9999) {
   console.log('4 che');
} else if (cnumber >=10000 && cnumber <=99999) {
   console.log('5 che');
} else {
   console.log('out of range');
}

// 14.lear year calculation
let year = new Date();
let currentyear = year.getFullYear() + 3;
console.log((currentyear % 4 == 0 || currentyear % 400 == 0 ? 'this is leap year': 'this is not leap year'));

// 15.cng vara
let distance = 125;
switch(true) {
   case distance >=0 && distance <=100 :
      console.log('vara hoise 120 tk');
      break;
   case distance >=101 && distance <=200 :
      console.log('vara hobe 200 tk') ;
      break;
   case distance >=201 && distance <=300 :
      console.log('vara hobe 300 tk') ;
      break;
   default :
      console.log('not interest');
}

// 15.cng vara another logic
let adis = 200;
if(adis >=0 && adis <=100) {
   console.log(100);
} else if(adis >=101 && adis <=200) {
   console.log(100 + 200);
}

// 16. triangel
let x = 20;
let y = 30;
let z = 40;
if (x + y >= z || x + z >= y || y + z >= x ) {
   console.log('true');
} else {
   console.log('false');
}





