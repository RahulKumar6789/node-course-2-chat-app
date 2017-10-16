var moment = require('moment');
// var date = new Date();
// var months = ['jan', 'feb']
// console.log(date.getMonth());
var someTimestamp = moment().valueOf();
console.log(someTimestamp);
//var date = moment();
//console.log(date.format('MMM Do, YYYY'));
//console.log(date.format('h:mm a'));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
