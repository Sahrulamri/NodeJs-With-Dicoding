const coffee = require('./coffee');
const { firstName, lastName } = require('./user');
 
const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);

console.log(firstName);
console.log(lastName);
 
console.log(coffee);