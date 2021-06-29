const readline = require('readline-sync');

//Max number for when more than 100 are required
console.log('\nEnter the maximum number:');
const Max = readline.prompt();

//Just going through the rules
for (var i=1; i < (parseInt(Max)+1); i++){
    if (i % 105 == 0) console.log("FizzBuzzBang");
    else if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 21 == 0) console.log("FizzBang");
    else if (i % 35 == 0) console.log("BuzzBang");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else if (i % 7 == 0) console.log("Bang");
    else console.log(i);
}