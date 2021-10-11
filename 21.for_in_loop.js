// Array method
const arry = ['mak', 'john', 'smith', 'mira'];
for(let name in arry) {
   console.log(name);
   console.log(arry[name]);
   console.log(`my name is ${arry[name]} and my index number is ${name}`)
}

// object method
const obj = {
   name : 'babu',
   age : 25,
   student : true
}
for(let key in obj) {
   console.log(key);
   console.log(obj[key]);
}

