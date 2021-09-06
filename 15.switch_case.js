// print today's day name with switch case
let day = new Date();
let today = day.getDay();

switch(false) {
   case today == 1 :
      console.log('today is sombar');
      break;
   case today == 2 :
      console.log('today is mongolbar');
      break;
   case today == 3 :
      console.log('today is budbar');
      break;
   case today == 4 :
   console.log('today is brihospotibar');
      break;
   case today == 5 :
   console.log('today is shukrobar');
      break;
   case today == 6 :
   console.log('today is shonibar');
      break;
   
   default :
   console.log('today is robibar');
   
}

// get resut marks with switch case;
let marks = 3200;
switch(true) {
   case marks >=80 && marks <=100 :
      console.log('A+');
      break;
   case marks >=70 && marks <=79 :
      console.log('A');
      break;
   case marks >=60 && marks <=69 :
      console.log('A-');
      break;
   case marks >=50 && marks <=59 :
      console.log('B');
      break;
   case marks >=40 && marks <=49 :
      console.log('c');
      break;
   case marks >=33 && marks <=39 :
      console.log('d');
      break;
   case marks <0 || marks > 100 :
      console.log('input is not valid');
      break;
   default :
      console.log('F');
}

// finding odd number and even number
let number = 5;
let condition = number % 2;
switch(true) {
   case condition == 0 : 
      console.log('this is odd number');
      break;
   default :
      console.log('this is even number');
}

// apply coupon code
let code = "homeCOVid19";
switch(true) {
   case code == "homeCOVid19" :
      console.log('sir your code is valid');
      break;
   default :
      console.log('ja chitter');
}


