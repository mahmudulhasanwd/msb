// write an object with name,age, ismarried, homeaddress, friend, phone-number property.
let user = {
   name : 'john',
   age : 32,
   ismarried : true,
   homeAddress : {
      village: 'longerpara',
      zilla : 'shperpur',
      postcode : 2100,
      presentAddress : {
         village: 'Dhaka',
         zilla : 'Dhaka',
         postcode : 1200
      }
   },
   friends: ['marry', 'card', 'smith'],
   phoneNumber: 1727550458

}

console.log(user);
console.log(user.name);
console.log(user['age']);
console.log(user.ismarried);
console.log(user.homeAddress);
console.log(user.homeAddress.presentAddress);
console.log(user.homeAddress.zilla);
console.log(user.homeAddress.presentAddress.postcode);
console.log(user.friends);
console.log(user.friends[0]);
console.log(user.friends.indexOf('smith'));
console.log(user['phoneNumber'])


