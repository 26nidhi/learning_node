let notes = require('./notes.js');
var _ = require('lodash');
console.log(notes.age);
console.log(notes.sumNum(2, 9));

var data = ["hi", "hi", 4, 5, 3, 4, 5, 8];

console.log(_.uniq(data));