const numbers = [1,2,3,4,5,6,7,8,9,10];

const square = numbers.map((item) => item*item);
const even = numbers.filter((item) => item%2==0);
const doubled = numbers.map((item) => item*2);
const sum = numbers.reduce((acc, val) => acc + val);
const avg = numbers.reduce((acc, val) => acc + val)/numbers.length;

console.log(square);
console.log(even);
console.log(sum);
console.log(doubled);
console.log(avg);