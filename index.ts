const readline = require('readline-sync');

//Max number for when more than 100 are required
console.log('\nEnter the maximum number:');
const Max = parseInt(readline.prompt());


for (var i=1; i < (Max+1); i++){
let wordList = [];
if (i % 3 == 0) wordList.push("Fizz");
if (i % 13 == 0) wordList.push("Fezz");
if (i % 5 == 0) wordList.push("Buzz");
if (i % 7 == 0) wordList.push("Bang");
if (i % 17 != 0) 
    if (i % 11 == 0)
        if (i % 13 == 0) console.log("FezzBong");
        else console.log("Bong");
    else if (wordList.length==0) console.log(i);
    else console.log(wordList.join(''));
else if (i % 11 == 0)
    if (i % 13 == 0) console.log("BongFezz ");
    else console.log("Bong");
else if (wordList.length==0) console.log(i);
else console.log((wordList.reverse()).join(''));
}

