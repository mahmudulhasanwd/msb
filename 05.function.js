// declare a simple funciton
function simple(){
   console.log('it is a simple funciton');
}
simple();

// declare a  funciton with paramitter and argument
function age(num) {
   console.log(num);
}
age(100);

// declare a  funciton with multipul paramitter and argument
function multi(number1, number2, number3) {
   console.log(number1, number2, number3)
}
multi(10,30,36);

// declare a  funciton with returning paramitter and argument
function userDetails(name, age, status) {
   const print = name + age + status
   return print;
}
console.log(userDetails('john', 26, 'single'));





