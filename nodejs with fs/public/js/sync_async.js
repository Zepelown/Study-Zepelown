const fs = require('fs');

//Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data) {
    console.log(3);
    console.log(data);
})
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
