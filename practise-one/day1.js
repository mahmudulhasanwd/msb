// var/let/const
var num = 10;
num = 20
console.log(num);

let num2 = 30;
num2 = 40
console.log(num2);

// const num3 = 50;
// num3 = 60;
// console.log(num3);

// datatype
let name = "durjoy";
console.log(typeof name);

let age = 25;
console.log(typeof age)

let bulliean = true;
console.log(typeof bulliean)

let undf;
console.log(undf);

let undfine = undefined;
console.log(undfine)

let willassign = null;
console.log(typeof null);

// object
let userDetails = {
   oName :'durjoy',
   age : 25,
   status : 'single',
   isMarried : false
}
console.log(userDetails);
console.log(userDetails.oName);
console.log(userDetails.age);
console.log(userDetails.status);
console.log(userDetails.isMarried);
console.log(typeof(userDetails.isMarried));
console.log(userDetails['oName'])

// array 
let friends = ['john', 'marry' , 'smith' , 250];
console.log(friends);
console.log(friends[2]);
console.log(friends.length);
console.log(typeof friends[2]);
console.log(typeof friends.length);

// function
function normal(){
   console.log('this is normall function');
}
normal();

function paramitter (num1){
   console.log(num1);
}
paramitter(20);

function multipara (num1, num2, num3) {
   console.log(num1, num2, num3);
}
multipara(10, 20, 30);

function ret (num4, num5) {
   const result =  num4 + num5;
   return result
}
console.log(ret(15, 20));

// template littral
var tlName = 'Mahmudul hasan'
console.log('my name is ' + tlName);

var tllName = 'Mahmudul hasan';
console.log(`my name is ${tllName}`);

var br = 'john';
console.log('my name is \n' + br);

var tmbr = 'smith';
console.log(`my name is 
${tmbr}`);

// write a array to declare name,age, ismarried, homeaddress, friend, phone-number property
let personDetails = {
   pName : 'john',
   page : 23,
   pismarried :true,
   homeaddress : {
      village: 'longerpara',
      zilla : 'shperpur',
      postcode : 2100,
      presentAddr : {
         village: 'Dhaka',
         zilla : 'Dhaka',
         postcode : 1200,
      }

   },
   friend : ['marry', 'kart', 'smith'],
   phoneNum : '01727550458'

} 

console.log(personDetails);
console.log(personDetails.pName);
console.log(personDetails.page);
console.log(personDetails.homeaddress);
console.log(personDetails.homeaddress.postcode);
console.log(personDetails.homeaddress.presentAddr.postcode);
console.log(personDetails.friend);
console.log(personDetails.friend[0]);
console.log(personDetails.friend.indexOf('kart'));
console.log(personDetails.phoneNum);
console.log(typeof personDetails.phoneNum);
let pconvertToNumber =Number(personDetails.phoneNum);
console.log(typeof pconvertToNumber);

// arithmatic Operator (+,-,*,/,**, %)
let aNum1 = 20;
let aNum2 = 10;
console.log(aNum1 + aNum2);
console.log(aNum1 - aNum2);
console.log(aNum1 * aNum2);
console.log(aNum1 / aNum2);
console.log(aNum1 ** aNum2);
console.log(aNum1 % aNum2);

// assignment operator ((=, +=, -=, *=, /=, **=,%=, ++, --))
let assNum1 = 20;
let assNum2 = 2;

assNum1 += 5;
console.log(assNum1);

assNum1 -= 5;
console.log(assNum1);

assNum1 *= 5;
console.log(assNum1);

assNum1 /= 5;
console.log(assNum1);

assNum1 **= 5;
console.log(assNum1);

assNum1 %= 5;
console.log(assNum1);

assNum1++;
console.log(assNum1);

assNum1--;
console.log(assNum1);

// comperision operator (>, < , >=, <=, ===, ==, !==, !=)
let frist = 50;
let second = 30;
let string = '50';
console.log(frist > 100);
console.log(frist < 100);
console.log(frist >= 100);
console.log(frist <= 100);
console.log(frist == string);
console.log(frist === string);
console.log(frist != 20);
console.log(frist !== '50');

// ex2 - swap two variable value
let a = 'babu'
let b = 'john';
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b)





