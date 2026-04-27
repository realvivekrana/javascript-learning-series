const sentence = "JavaScript is the very interactive language";
//find out the longest word among the all words available in the statements;

const array = sentence.split(' ')

let longest = 0;
let word = ''
for(let a of array){
    if(a.length>longest){
        longest = a.length;
        word = a;
    }
}
console.log(`Longest Word: ${word}`);
console.log(`Length: ${longest}`);

