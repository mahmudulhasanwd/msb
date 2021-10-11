// 09.Fizz buzz problem solve with tarnary operator
let values = 15;
let result =(values % 3 == 0 && values % 5 == 0 ? 'this is devided by 3 and 5' : values % 3 == 0 ? 'this is devided by 3' : values % 5 == 0 ? 'this is divided by 5' : 'this is nothing');

console.log(result);
